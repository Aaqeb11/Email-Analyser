import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import OpenAI from 'openai';
import { PrismaService } from 'prisma/prisma.service';
import { EmailDataStructure, EmailWithEmbedding, RawEmailData } from './types';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private openai: OpenAI;

  constructor(private prisma: PrismaService) {
    this.openai = new OpenAI({
      apiKey: process.env.OPEN_API_KEY,
    });
  }

  async processAllEmails(emailDataStructure: EmailDataStructure) {
    this.logger.log('Starting to process all emails');
    try {
      for (const [emailAddress, emails] of Object.entries(emailDataStructure)) {
        this.logger.log(`Processing emails for: ${emailAddress}`);

        for (const email of emails) {
          await this.uploadEmailData(email);
        }
      }
    } catch (error) {
      this.logger.error('Error processing emails:', error);
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

  private async uploadEmailData(emailData: RawEmailData) {
    this.logger.log(`Processing email with subject: ${emailData.subject}`);
    try {
      // Combine relevant text for embedding
      const textForEmbedding = `
        Subject: ${emailData.subject}
        Body: ${emailData.body}
        Sender: ${emailData.sender.name} (${emailData.sender.email})
        Receiver: ${emailData.receiver.name} (${emailData.receiver.email})
      `.trim();

      // Generate embedding using the common method
      const embeddings = await this.generateEmbedding(textForEmbedding);

      // Create email record using Prisma
      const email = await this.prisma.email.create({
        data: {
          subject: emailData.subject,
          body: emailData.body,
          sentDateTime: new Date(emailData.sent_datetime),
          receivedDateTime: new Date(emailData.received_datetime),
          hasAttachments: emailData.has_attachments,
          sender: emailData.sender as unknown as Prisma.JsonValue,
          receiver: emailData.receiver as unknown as Prisma.JsonValue,
          vectorEmbedding: embeddings as any,
        },
      });

      return email;
    } catch (error) {
      this.logger.error(`Error uploading email: ${error.message}`);
      this.logger.error(`Error details:`, error);
      throw error;
    }
  }

  async findSimilarEmails(queryText: string, limit: number = 5) {
    try {
      const queryEmbedding = await this.generateEmbedding(queryText);

      const getAllEmailEmbeddings = await this.prisma.email.findMany({
        select: {
          vectorEmbedding: true,
        },
      });
      this.logger.log(getAllEmailEmbeddings);
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: 'assistant',
            content: "Group similar emails based on the user's query",
          },
          {
            role: 'user',
            content: `user query:${queryEmbedding}, email-embeddings:${getAllEmailEmbeddings}`,
          },
        ],
      });
      return completion;
    } catch (error) {
      this.logger.error(`Error finding similar emails: ${error.message}`);
      throw error;
    }
  }
}
