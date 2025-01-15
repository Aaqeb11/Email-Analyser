import { Injectable, Logger } from '@nestjs/common';
import { Email, Prisma } from '@prisma/client';
import OpenAI from 'openai';
import { PrismaService } from 'prisma/prisma.service';
import {
  EmailDataStructure,
  EmailWithEmbedding,
  RawEmailData,
  SimilarEmail,
  ClassificationResponse,
} from './types';
import { ConfigService } from '@nestjs/config';
import pgvector from 'pgvector/pg';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { OpenAIEmbeddings } from '@langchain/openai';
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { RunnableSequence } from '@langchain/core/runnables';
import { StructuredOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import z from 'zod';

const classificationSchema = z.object({
  classifications: z.array(
    z.object({
      category: z.string(),
      instances: z.array(
        z.object({
          name: z.string(),
          confidence: z.number(),
          metadata: z.record(z.any()),
          similarityScore: z.number().optional(),
        }),
      ),
    }),
  ),
});

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private openaiEmbeddings: OpenAIEmbeddings;
  private chatOpenAi: ChatOpenAI;
  private classificationChain: RunnableSequence;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {
    const apiKey = this.configService.get<string>('OPENAI_API_KEY');
    this.openaiEmbeddings = new OpenAIEmbeddings({
      apiKey: apiKey,
    });
    this.chatOpenAi = new ChatOpenAI({
      modelName: 'gpt-4-turbo-preview',
      apiKey: apiKey,
      streaming: false,
    });
    this.initializeClassificationChain();
  }

  private async initializeClassificationChain() {
    const outputParser =
      StructuredOutputParser.fromZodSchema(classificationSchema);

    const promptTemplate = ChatPromptTemplate.fromTemplate(`
      You are an email classifier. Analyze both the current email and patterns from similar emails to provide accurate classification.
      Similar emails have these classifications:
      {similarEmailsContext}
      
      Classify the email into these categories and identify specific instances:
      {categories}
      
      Consider the classifications from similar emails when making your decision.
      If an entity appears in similar emails with high confidence, it's likely relevant.
      
      Email to classify:
      {emailContent}
      
      {format_instructions}
    `);

    this.classificationChain = RunnableSequence.from([
      {
        emailContent: (input: {
          emailContent: string;
          similarEmailsContext: any;
        }) => input.emailContent,
        similarEmailsContext: (input: {
          emailContent: string;
          similarEmailsContext: any;
        }) => JSON.stringify(input.similarEmailsContext, null, 2),
        categories: () => `
          - Clients (identify specific company names)
          - Contacts (identify specific people)
          - Candidates (identify specific candidates)
          - Positions (identify specific job titles)
          - Employees (identify specific employees)
          - Department (identify specific departments)
          - Stages (identify specific stages)
          - Topics (identify main topics)
          - Location (identify specific locations)
          - Point of Contacts (identify specific POCs)
        `,
        format_instructions: () => outputParser.getFormatInstructions(),
      },
      promptTemplate,
      this.chatOpenAi,
      outputParser,
    ]);
  }

  async uploadAllEmails(jsonData: any) {
    this.logger.log('Starting batch email upload');
    try {
      for (const [emailAddress, emails] of Object.entries(jsonData)) {
        this.logger.log(`Processing emails for: ${emailAddress}`);
        for (const email of emails as RawEmailData[]) {
          await this.uploadEmailDataBatch(email);
        }
      }
      this.logger.log('Completed batch email upload');
    } catch (error) {
      this.logger.error('Error in batch upload:', error);
      throw error;
    }
  }

  private async generateEmbedding(text: string): Promise<number[]> {
    try {
      return await this.openaiEmbeddings.embedQuery(text);
    } catch (error) {
      this.logger.error(`Error generating embedding: ${error.message}`);
      throw error;
    }
  }

  async uploadEmailDataBatch(emailData: RawEmailData) {
    this.logger.log(`Processing email with subject: ${emailData.subject}`);
    try {
      const textForEmbedding = `
        Subject: ${emailData.subject}
        Body: ${emailData.body}
        Sender: ${emailData.sender.name} (${emailData.sender.email})
        Receiver: ${emailData.receiver.name} (${emailData.receiver.email})
      `.trim();

      const embeddings = await this.generateEmbedding(textForEmbedding);
      const vectorString = JSON.stringify(embeddings);

      const email = await this.prisma.$transaction(async (prisma) => {
        const createdEmail = await prisma.email.create({
          data: {
            subject: emailData.subject,
            body: emailData.body,
            sentDateTime: new Date(emailData.sent_datetime),
            receivedDateTime: new Date(emailData.received_datetime),
            hasAttachments: emailData.has_attachments || false,
            sender: emailData.sender as unknown as Prisma.JsonValue,
            receiver: emailData.receiver as unknown as Prisma.JsonValue,
          },
        });

        await prisma.$executeRaw`
          UPDATE "Email" 
          SET "embedding" = ${vectorString}::vector 
          WHERE id = ${createdEmail.id}
        `;

        return createdEmail;
      });

      await this.classifyEmail(email);
      return email;
    } catch (error) {
      this.logger.error(`Error uploading email: ${error.message}`);
      throw error;
    }
  }

  async findSimilarEmails(queryText: string, limit: number = 2) {
    try {
      const queryEmbedding = await this.generateEmbedding(queryText);
      const vectorString = JSON.stringify(queryEmbedding);
      const similarityThreshold = 0.9; 
  
      const hybridSearchQuery = Prisma.sql`
        WITH semantic_search AS (
          SELECT 
            id, 
            RANK() OVER (ORDER BY "embedding" <=> ${vectorString}::vector) as rank,
            ("embedding" <=> ${vectorString}::vector) as semantic_score
          FROM "Email"
          WHERE "embedding" IS NOT NULL
          ORDER BY semantic_score
          LIMIT 5
        ),
        keyword_search AS (
          SELECT 
            id,
            RANK() OVER (
              ORDER BY 
                ts_rank_cd(to_tsvector('english', body), query) * 0.2 +
                ts_rank_cd(to_tsvector('english', subject), query) * 0.1 +
                ts_rank_cd(to_tsvector('english', sender::text), query) * 0.35 +
                ts_rank_cd(to_tsvector('english', receiver::text), query) * 0.35
              DESC
            ) as rank,
            ts_rank_cd(to_tsvector('english', body), query) as keyword_score
          FROM "Email", plainto_tsquery('english', ${queryText}) query
          WHERE 
            to_tsvector('english', body) @@ query OR
            to_tsvector('english', subject) @@ query OR
            to_tsvector('english', sender::text) @@ query OR
            to_tsvector('english', receiver::text) @@ query
          LIMIT 5
        )
        SELECT 
          e.id,
          e.subject,
          e.body,
          e."sentDateTime",
          e."receivedDateTime",
          e."hasAttachments",
          e.sender::text as sender,
          e.receiver::text as receiver,
          semantic_search.semantic_score,
          keyword_search.keyword_score,
          (COALESCE(1.0 / (1 + semantic_search.semantic_score), 0.0) * 0.6 +
           COALESCE(keyword_search.keyword_score, 0.0) * 0.4) as combined_score
        FROM "Email" e
        LEFT JOIN semantic_search ON e.id = semantic_search.id
        LEFT JOIN keyword_search ON e.id = keyword_search.id
        WHERE (semantic_search.id IS NOT NULL OR keyword_search.id IS NOT NULL)
        AND (
          COALESCE(semantic_search.semantic_score, 1) < ${similarityThreshold} OR
          COALESCE(keyword_search.keyword_score, 0) > 0.1
        )
        ORDER BY combined_score DESC
        LIMIT ${limit}
      `;
  
      // Log scores for debugging
      this.logger.log('Running hybrid search with threshold:', similarityThreshold);
      
      const similarEmails = await this.prisma.$queryRaw<SimilarEmail[]>(hybridSearchQuery);
      
      // Log found emails with their scores
      if (similarEmails.length > 0) {
        this.logger.log('Found similar emails with scores:', 
          similarEmails.map(email => ({
            id: email.id,
            subject: email.subject,
            semantic_score: email.similarity,
          }))
        );
      }
  
      return similarEmails;
    } catch (error) {
      this.logger.error(`Error finding similar emails: ${error.message}`);
      throw error;
    }
  }

  private async classifyEmail(email: Email) {
    this.logger.log('Starting enhanced classification');
    try {
      const emailContent = `
        Subject: ${email.subject}
        Body: ${email.body}
        From: ${JSON.stringify(email.sender)}
        To: ${JSON.stringify(email.receiver)}
      `;

      const similarEmails = await this.findSimilarEmails(emailContent, 5);

      const existingClassifications = await this.prisma.emailEntity.findMany({
        where: {
          emailId: {
            in: similarEmails.map((email) => email.id),
          },
        },
        include: {
          entity: true,
          entityInstance: true,
        },
      });

      const similarEmailsContext = existingClassifications.reduce(
        (acc, classification) => {
          const category = classification.entity.name;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push({
            name: classification.entityInstance.name,
            confidence: classification.confidence,
            metadata: classification.entityInstance.metadata,
          });
          return acc;
        },
        {} as Record<string, any[]>,
      );

      const result = await this.classificationChain.invoke({
        emailContent,
        similarEmailsContext,
      });

      await this.storeClassifications(email.id, result, similarEmails);
    } catch (error) {
      this.logger.error(`Error in enhanced classification: ${error.message}`);
      throw error;
    }
  }

  private async storeClassifications(
    emailId: string,
    classifications: ClassificationResponse,
    similarEmails: SimilarEmail[],
  ) {
    await this.prisma.$transaction(async (prisma) => {
      for (const classification of classifications.classifications) {
        const entity = await prisma.entity.upsert({
          where: { name: classification.category },
          create: { name: classification.category },
          update: {},
        });

        for (const instance of classification.instances) {
          const finalConfidence =
            instance.confidence * 0.7 + (instance.similarityScore || 0) * 0.3;

          const entityInstance = await prisma.entityInstance.upsert({
            where: {
              entityId_name: {
                entityId: entity.id,
                name: instance.name,
              },
            },
            create: {
              entityId: entity.id,
              name: instance.name,
              metadata: {
                ...instance.metadata,
                similarityContext: instance.similarityScore
                  ? {
                      score: instance.similarityScore,
                      similarEmails: similarEmails.length,
                    }
                  : null,
              },
            },
            update: {
              metadata: {
                ...instance.metadata,
                similarityContext: instance.similarityScore
                  ? {
                      score: instance.similarityScore,
                      similarEmails: similarEmails.length,
                    }
                  : null,
              },
            },
          });

          await prisma.emailEntity.create({
            data: {
              emailId,
              entityId: entity.id,
              entityInstanceId: entityInstance.id,
              confidence: finalConfidence,
            },
          });
        }
      }
    });
  }
}
