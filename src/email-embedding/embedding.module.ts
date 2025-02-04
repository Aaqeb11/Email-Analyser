import { Module } from '@nestjs/common';
import { EmbeddingController } from './embedding.controller';
import { EmbeddingAndCategorizationService } from './embedding.service';
import { BullModule } from '@nestjs/bull';
import { EmailProcessor } from './processors/email.processor';
import { PrismaServicePrimary } from './prisma.service';
import { InsertMessages } from './message.service';
import { PrismaService } from 'src/prisma.service';

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
    EmbeddingAndCategorizationService,
    EmailProcessor,
    PrismaServicePrimary,
    PrismaService,
    InsertMessages,
  ],
  controllers: [EmbeddingController],
})
export class EmbeddingModule {}
