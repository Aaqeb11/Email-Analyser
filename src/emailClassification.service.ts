import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { runEmailClassification } from './email-classification-workflow';
import { BaseMessage } from '@langchain/core/messages';

// Define interfaces for our types
export interface ClassificationState {
  messages: BaseMessage[];
  currentEmail?: any;
  unprocessedEmails: any[];
  classifications: {
    classifications: Array<{
      category: string;
      instances: Array<{
        name: string;
        confidence: number;
        metadata?: Record<string, any>;
      }>;
    }>;
  };
}

export interface ClassificationResult {
  status: string;
  result: ClassificationState;
  classification_status: {
    total_emails: number;
    classified_emails: number;
    remaining: number;
    completion_percentage: number;
    processed_in_session: number;
  };
}

@Injectable()
export class EmailClassificationService {
  private readonly logger = new Logger(EmailClassificationService.name);

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  async classifyEmails(): Promise<any> {
    try {
      this.logger.log('Starting email classification process');
      
      // Get initial status
    //   const initialStatus = await this.getClassificationStatus();
      
      // Start the LangGraph agent
      const result = await runEmailClassification();
      
      // Get final status
    //   const finalStatus = await this.getClassificationStatus();
      
      // Calculate emails processed in this session
    //   const processedInSession = finalStatus.classified_emails - initialStatus.classified_emails;
      
      this.logger.log(`Classification completed. Processed  emails in this session.`);
      
    //   return {
    //     status: 'success',
    //     result: result as ClassificationState,
    //     classification_status: {
    //       ,
    //       processed_in_session: processedInSession
    //     }
    //   };
    } catch (error) {
      this.logger.error(`Error in classification: ${error.message}`, error.stack);
      
      if (error.troubleshootingUrl) {
        this.logger.error(`Troubleshooting URL: ${error.troubleshootingUrl}`);
      }
      
      throw new Error(`Classification error: ${error.message}${
        error.troubleshootingUrl ? `\nTroubleshooting URL: ${error.troubleshootingUrl}` : ''
      }`);
    }
  }

  private async getClassificationStatus() {
    try {
      const [totalEmails, classifiedEmails] = await Promise.all([
        this.prisma.email.count(),
        this.prisma.email.count({
          where: {
            emailEntities: {
              some: {}
            }
          }
        })
      ]);

      const remaining = totalEmails - classifiedEmails;
      const completionPercentage = totalEmails ? Math.round((classifiedEmails / totalEmails) * 100) : 0;

      return {
        total_emails: totalEmails,
        classified_emails: classifiedEmails,
        remaining,
        completion_percentage: completionPercentage
      };
    } catch (error) {
      this.logger.error(`Error getting classification status: ${error.message}`);
      throw error;
    }
  }

  async getClassificationMetrics() {
    try {
      const entityCounts = await this.prisma.emailEntity.groupBy({
        by: ['entityId'],
        _count: {
          _all: true
        }
      });

      const entityDetails = await Promise.all(
        entityCounts.map(async (count) => {
          const entity = await this.prisma.entity.findUnique({
            where: { id: count.entityId }
          });
          return {
            category: entity.name,
            count: count._count._all
          };
        })
      );

      return {
        status: 'success',
        metrics: {
          entities: entityDetails,
          ...(await this.getClassificationStatus())
        }
      };
    } catch (error) {
      this.logger.error(`Error getting classification metrics: ${error.message}`);
      throw error;
    }
  }
}