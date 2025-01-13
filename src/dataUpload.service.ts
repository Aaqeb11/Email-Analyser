import { Injectable, Logger } from '@nestjs/common';
import { Email, Prisma } from '@prisma/client';
import OpenAI from 'openai';
import { PrismaService } from 'prisma/prisma.service';
import {
  EmailDataStructure,
  EmailWithEmbedding,
  RawEmailData,
  SimilarEmail,
} from './types';
import { ConfigService } from '@nestjs/config';
import pgvector from 'pgvector/pg';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private openai: OpenAI;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {
    const apiKey = this.configService.get<string>('OPENAI_API_KEY');
    this.openai = new OpenAI({
      apiKey: apiKey,
    });
  }

  async uploadAllEmails(jsonData: any) {
    this.logger.log('Starting batch email upload');
    try {
      // Process each email group
      for (const [emailAddress, emails] of Object.entries(jsonData)) {
        this.logger.log(`Processing emails for: ${emailAddress}`);
        
        // Process each email in the group
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
      const embedding = await this.openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: text,
      });

      return embedding.data[0].embedding;
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
  
      // Create email record and update embedding in a transaction
      const email = await this.prisma.$transaction(async (prisma) => {
        // Create the email
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
  
        // Update embedding using raw SQL
        await prisma.$executeRaw`
          UPDATE "Email" 
          SET "embedding" = ${vectorString}::vector 
          WHERE id = ${createdEmail.id}
        `;
  
        return createdEmail;
      });
  
      // After successfully creating email and updating embedding, classify it
      await this.classifyEmail(email);
  
      return email;
    } catch (error) {
      this.logger.error(`Error uploading email: ${error.message}`);
      throw error;
    }
  }

  async findSimilarEmails(queryText: string, limit: number = 2) { // Changed default limit to 2
    try {
      const queryEmbedding = await this.generateEmbedding(queryText);
      const vectorString = JSON.stringify(queryEmbedding);
      const similarityThreshold = 0.7; // Add threshold for minimum similarity
  
      const hybridSearchQuery = Prisma.sql`
        WITH semantic_search AS (
          SELECT 
            id, 
            RANK() OVER (ORDER BY "embedding" <=> ${vectorString}::vector) as rank,
            "embedding"::text as embedding_text
          FROM "Email"
          ORDER BY "embedding" <=> ${vectorString}::vector
          LIMIT 5  -- Reduced from 20 to get more relevant matches
        ),
        keyword_search AS (
          SELECT 
            id,
            RANK() OVER (
              ORDER BY ts_rank_cd(to_tsvector('english', body), query) DESC
            ) as rank
          FROM "Email", plainto_tsquery('english', ${queryText}) query
          WHERE to_tsvector('english', body) @@ query
          ORDER BY ts_rank_cd(to_tsvector('english', body), query) DESC
          LIMIT 5  -- Reduced from 20 to get more relevant matches
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
          e."embedding"::text as embedding,
          (COALESCE(1.0 / (10 + semantic_search.rank), 0.0) +
           COALESCE(1.0 / (10 + keyword_search.rank), 0.0)) as similarity  -- Adjusted k value for sharper similarity differences
        FROM "Email" e
        LEFT JOIN semantic_search ON e.id = semantic_search.id
        LEFT JOIN keyword_search ON e.id = keyword_search.id
        WHERE (semantic_search.id IS NOT NULL OR keyword_search.id IS NOT NULL)
        AND (COALESCE(1.0 / (10 + semantic_search.rank), 0.0) +
             COALESCE(1.0 / (10 + keyword_search.rank), 0.0)) > ${similarityThreshold}  -- Only return highly similar emails
        ORDER BY similarity DESC
        LIMIT ${limit}
      `;
  
      const similarEmails = await this.prisma.$queryRaw<SimilarEmail[]>(hybridSearchQuery);
      return similarEmails;
    } catch (error) {
      this.logger.error(`Error finding similar emails: ${error.message}`);
      throw error;
    }
  }
  private async classifyEmail(email: Email) {
    this.logger.log("inside AI")
    try {
      const emailContent = `
        Subject: ${email.subject}
        Body: ${email.body}
        From: ${JSON.stringify(email.sender)}
        To: ${JSON.stringify(email.receiver)}
      `;
  
      // Get similar emails to help with classification
      const similarEmails = await this.findSimilarEmails(emailContent, 5);
  
      // Modified prompt to extract specific entities
      const response = await this.openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: `You are an email classifier. Classify the email into these categories and identify specific instances:
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
  
              Return a JSON object with the following structure:
              {
                "classifications": [
                  {
                    "category": "Clients",
                    "instances": [
                      {
                        "name": "Almco Steel",
                        "confidence": 0.95,
                        "metadata": { "type": "Manufacturing" }
                      }
                    ]
                  }
                ]
              }`
          },
          {
            role: "user",
            content: `Classify this email and identify specific entities:\n${emailContent}`
          }
        ],
        response_format: { type: "json_object" }
      });
  
      const parsedResponse = JSON.parse(response.choices[0].message.content);
      
      if (!parsedResponse?.classifications || !Array.isArray(parsedResponse.classifications)) {
        throw new Error('Invalid classification response format');
      }
  
      this.logger.log('Classifications received:', parsedResponse);
  
      // Store classifications using transaction
      await this.prisma.$transaction(async (prisma) => {
        for (const classification of parsedResponse.classifications) {
          // Create/get main entity category
          const entity = await prisma.entity.upsert({
            where: { name: classification.category },
            create: { name: classification.category },
            update: {}
          });
  
          // Process each instance
          for (const instance of classification.instances) {
            // Create/get entity instance
            const entityInstance = await prisma.entityInstance.upsert({
              where: {
                entityId_name: {
                  entityId: entity.id,
                  name: instance.name
                }
              },
              create: {
                entityId: entity.id,
                name: instance.name,
                metadata: instance.metadata || {}
              },
              update: {
                metadata: instance.metadata || {}
              }
            });
  
            // Create email entity relation
            await prisma.emailEntity.create({
              data: {
                emailId: email.id,
                entityId: entity.id,
                entityInstanceId: entityInstance.id,
                confidence: instance.confidence
              }
            });
          }
        }
      });
  
    } catch (error) {
      this.logger.error(`Error classifying email: ${error.message}`);
      if (error.response) {
        this.logger.error('OpenAI API response:', error.response.data);
      }
      throw error;
    }
  }
}
