// src/email.processor.ts
import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { CategorizationService } from './categorization.service';
import { IMessage } from './categorization.service';
@Processor('email-processing')
export class EmailProcessor {
  private readonly logger = new Logger(EmailProcessor.name);
  private activeJobs = 0;

  constructor(private readonly categorizationService: CategorizationService) {}

  @Process({
    name: 'process-email',
    concurrency: 10,
  })
  async handleEmailProcessing(job: Job<IMessage>) {
    this.activeJobs++;
    this.logger.log(`Starting job ${job.id}. Active jobs: ${this.activeJobs}`);

    try {
      const result = await this.categorizationService.processMessage(job.data);
      this.activeJobs--;
      this.logger.log(
        `Completed job ${job.id}. Remaining active jobs: ${this.activeJobs}`,
      );
      return result;
    } catch (error) {
      this.activeJobs--;
      this.logger.error(
        `Error in job ${job.id}: ${error.message}. Remaining active jobs: ${this.activeJobs}`,
      );
      throw error;
    }
  }
}
