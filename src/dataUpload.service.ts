import { Injectable, Logger } from '@nestjs/common';
import { Email, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { OpenAIEmbeddings } from '@langchain/openai';
import { RawEmailData, SimilarEmail } from './types';
import * as fs from 'fs/promises';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private openaiEmbeddings: OpenAIEmbeddings;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {
    const apiKey = this.configService.get<string>('OPENAI_API_KEY');
    this.openaiEmbeddings = new OpenAIEmbeddings({
      apiKey: apiKey,
    });
  }

  async uploadAllEmails(jsonData: any) {
    this.logger.log('Starting batch email upload');
    try {
      const uploadedEmails = [];
      for (const [emailAddress, emails] of Object.entries(jsonData)) {
        this.logger.log(`Processing emails for: ${emailAddress}`);
        for (const email of emails as RawEmailData[]) {
          const uploadedEmail = await this.uploadEmailDataBatch(email);
          uploadedEmails.push(uploadedEmail);
        }
      }
      return uploadedEmails;
    } catch (error) {
      this.logger.error('Error in batch upload:', error);
      throw error;
    }
  }

  private async generateEmbeddings(emailData: RawEmailData): Promise<any> {
    try {
      const [subjectEmbed, bodyEmbed, senderEmbed, receiverEmbed] = await Promise.all([
        this.openaiEmbeddings.embedQuery(emailData.subject || ''),
        this.openaiEmbeddings.embedQuery(emailData.body || ''),
        this.openaiEmbeddings.embedQuery(JSON.stringify(emailData.sender)),
        this.openaiEmbeddings.embedQuery(JSON.stringify(emailData.receiver))
      ]);

      return {
        subject: subjectEmbed,
        body: bodyEmbed,
        sender: senderEmbed,
        receiver: receiverEmbed
      };
    } catch (error) {
      this.logger.error(`Error generating embeddings: ${error.message}`);
      throw error;
    }
  }

  async uploadEmailDataBatch(emailData: RawEmailData) {
    this.logger.log(`Processing email with subject: ${emailData.subject}`);
    try {
      const embeddings = await this.generateEmbeddings(emailData);

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
          SET 
            "subjectEmbedding" = ${JSON.stringify(embeddings.subject)}::vector,
            "bodyEmbedding" = ${JSON.stringify(embeddings.body)}::vector,
            "senderEmbedding" = ${JSON.stringify(embeddings.sender)}::vector,
            "receiverEmbedding" = ${JSON.stringify(embeddings.receiver)}::vector
          WHERE id = ${createdEmail.id}
        `;

        return createdEmail;
      });

      return email;
    } catch (error) {
      this.logger.error(`Error uploading email: ${error.message}`);
      throw error;
    }
  }

  async findSimilarEmails(emailId: string, limit: number = 2) {
    try {
      const email = await this.prisma.email.findUnique({
        where: { id: emailId }
      });

      if (!email) {
        throw new Error('Email not found');
      }

      const emailData: RawEmailData = {
        subject: email.subject,
        body: email.body,
        sent_datetime: email.sentDateTime.toISOString(),
        received_datetime: email.receivedDateTime.toISOString(),
        sender: email.sender as any,
        receiver: email.receiver as any,
        has_attachments: email.hasAttachments
      };

      const queryEmbeddings = await this.generateEmbeddings(emailData);
      const similarityThreshold = 0.9;

      const hybridSearchQuery = Prisma.sql`
        WITH similarity_scores AS (
          SELECT 
            id,
            (
              ("subjectEmbedding" <=> ${JSON.stringify(queryEmbeddings.subject)}::vector) * 0.3 +
              ("bodyEmbedding" <=> ${JSON.stringify(queryEmbeddings.body)}::vector) * 0.4 +
              ("senderEmbedding" <=> ${JSON.stringify(queryEmbeddings.sender)}::vector) * 0.15 +
              ("receiverEmbedding" <=> ${JSON.stringify(queryEmbeddings.receiver)}::vector) * 0.15
            ) as similarity_score
          FROM "Email"
          WHERE "subjectEmbedding" IS NOT NULL
            AND "bodyEmbedding" IS NOT NULL
            AND "senderEmbedding" IS NOT NULL
            AND "receiverEmbedding" IS NOT NULL
            AND id != ${emailId}
        )
        SELECT 
          e.*,
          s.similarity_score
        FROM "Email" e
        JOIN similarity_scores s ON e.id = s.id
        WHERE s.similarity_score < ${similarityThreshold}
        ORDER BY s.similarity_score ASC
        LIMIT ${limit}
      `;

      const similarEmails = await this.prisma.$queryRaw<SimilarEmail[]>(hybridSearchQuery);
      return similarEmails;
    } catch (error) {
      this.logger.error(`Error finding similar emails: ${error.message}`);
      throw error;
    }
  }

  async uploadEmailsFromFile(filePath: string) {
    this.logger.log(`Reading emails from file: ${filePath}`);
    try {
      const fileContent = await fs.readFile(filePath, 'utf8');
      const jsonData = JSON.parse(fileContent);
      return await this.uploadAllEmails(jsonData);
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new Error(`File not found: ${filePath}`);
      }
      if (error instanceof SyntaxError) {
        throw new Error('Invalid JSON file format');
      }
      this.logger.error('Error processing file:', error);
      throw error;
    }
  }
}