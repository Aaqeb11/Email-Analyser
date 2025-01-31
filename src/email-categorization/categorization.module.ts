import { Module } from '@nestjs/common';
import { CategorizationController } from './categorization.controller';
import { CategorizationService } from './categorization.service';
import { PrismaService } from 'src/prisma.service';
import { CompanyClassificationService } from './classificatoin.service';
import { ConversationService } from './conversation.service';
import { BullModule } from '@nestjs/bull';
import { EmailProcessor } from './email.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'email-processing',
      defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: false,
      },
    }),
  ],
  providers: [
    CategorizationService,
    PrismaService,
    CompanyClassificationService,
    ConversationService,
    EmailProcessor,
  ],
  controllers: [CategorizationController],
})
export class CategorizationModule {}
