import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailService } from './dataUpload.service';
import { PrismaService } from 'prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { EmailClassificationService } from './emailClassification.service';

@Module({
  imports: [ 
    ConfigModule.forRoot({
    isGlobal: true,
  }),],
  controllers: [AppController],
  providers: [AppService, EmailService, PrismaService, EmailClassificationService],
})
export class AppModule {}
