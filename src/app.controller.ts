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
  logger: any;
  constructor(
    private readonly appService: AppService,
    private readonly emailservice: EmailService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('upload')
  async uploadEmails(@Body() emailData: any) {
    try {
      // Validate the data structure
      if (!emailData || typeof emailData !== 'object') {
        throw new HttpException(
          'Invalid data format',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Process the emails
      await this.emailservice.uploadAllEmails(emailData);
      
      return { 
        status: 'success',
        message: 'Emails processed successfully' 
      };
    } catch (error) {
      console.error('Upload error:', error);
      throw new HttpException({
        status: 'error',
        message: 'Failed to process emails',
        error: error.message
      }, HttpStatus.INTERNAL_SERVER_ERROR);
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
