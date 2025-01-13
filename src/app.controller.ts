import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { EmailDataStructure, RawEmailData } from './types';
import { EmailService } from './dataUpload.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly emailservice: EmailService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('upload')
  async uploadEmails(@Body() emailDataStructure: EmailDataStructure) {
    try {
      await this.emailservice.processAllEmails(emailDataStructure);
      return { message: 'Emails processed successfully' };
    } catch (error) {
      throw new HttpException(
        'Failed to process emails',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Post('similarity')
  async getSimilar(@Query('query') query: string) {
    try {
      const result = await this.emailservice.findSimilarEmails(query, 5);
      return result;
    } catch (error) {
      ('Failed to similar');
    }
  }
}
