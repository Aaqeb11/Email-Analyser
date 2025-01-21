import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { EmailService } from './dataUpload.service';
import { PrismaService } from 'src/prisma.service';
import { ConfigModule } from '@nestjs/config';// import { EmailClassificationService } from './emailClassification.service';
import { CategorizationModule } from './email-categorization/categorization.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({
    isGlobal: true,
  }),CategorizationModule] ,
  controllers: [AppController],
  providers: [AppService,  PrismaService],
})
export class AppModule {}
