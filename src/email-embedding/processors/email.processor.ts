import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { EmbeddingAndCategorizationService } from '../embedding.service';
import { IMessage } from '../../types';
@Processor('email-processing')
export class EmailProcessor {
  private readonly logger = new Logger(EmailProcessor.name);

  constructor(
    private readonly embeddingService: EmbeddingAndCategorizationService,
  ) {}

  @Process({
    name: 'process-email',
    concurrency: 10,
  })
  async handleEmailProcessing(job: Job<IMessage>) {
    this.logger.log(`Processing started for job ${job.id}`);

    try {
      const result = await this.embeddingService.processMessage(job.data);
      this.logger.log(`Processing completed for job ${job.id}`);
      return result;
    } catch (error) {
      this.logger.error(`Processing failed for job ${job.id}:`, error);
      throw error;
    }
  }
}
