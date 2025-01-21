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
import { EmailDataStructure, RawEmailData, UploadPathDto } from './types';
// import { EmailService } from './dataUpload.service';
// import { EmailClassificationService } from './emailClassification.service';
// import { fetchEmail } from './tools';

@Controller()
export class AppController {
  // logger: any;
  // constructor(
  //   private readonly appService: AppService,
  //   private readonly emailservice: EmailService,
  //   // private readonly classificationService:EmailClassificationService
  // ) {}
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Post('upload')
  // async uploadEmails(@Body() uploadDto: UploadPathDto) {
  //   try {
  //     if (!uploadDto.filePath) {
  //       throw new HttpException(
  //         'File path is required',
  //         HttpStatus.BAD_REQUEST,
  //       );
  //     }

  //     const result = await this.emailservice.uploadEmailsFromFile(uploadDto.filePath);
      
  //     return { 
  //       status: 'success',
  //       message: 'Emails uploaded successfully with embeddings',
  //       count: result.length
  //     };
  //   } catch (error) {
  //     console.error('Upload error:', error);
  //     throw new HttpException({
  //       status: 'error',
  //       message: 'Failed to upload emails',
  //       error: error.message
  //     }, HttpStatus.INTERNAL_SERVER_ERROR);
  //   }
  // }


  // // @Post('classify')
  // // async classifyEmails( ) {
  // //   try {
  // //     // if (!params.emailIds || !Array.isArray(params.emailIds)) {
  // //     //   throw new HttpException('Invalid email IDs', HttpStatus.BAD_REQUEST);
  // //     // }

  // //     const results = await this.classificationService.classifyEmails();
  // //     return {
  // //       status: 'success',
  // //       data: results
  // //     };
  // //   } catch (error) {
  // //     console.error('Classification error:', error);
  // //     throw new HttpException({
  // //       status: 'error',
  // //       message: 'Failed to classify emails',
  // //       error: error.message
  // //     }, HttpStatus.INTERNAL_SERVER_ERROR);
  // //   }
  // // }

  // @Post('similarity')
  // async findSimilarEmails(@Body() params: { emailId: string, limit?: number }) {
  //   try {
  //     if (!params.emailId) {
  //       throw new HttpException('Email ID required', HttpStatus.BAD_REQUEST);
  //     }

  //     // const similarEmails = await this.emailservice.findSimilarEmails(params.emailId as any, params.limit);
  //     // return {
  //     //   status: 'success',
  //     //   data: similarEmails
  //     // };
  //   } catch (error) {
  //     console.error('Similarity search error:', error);
  //     throw new HttpException({
  //       status: 'error',
  //       message: 'Failed to find similar emails',
  //       error: error.message
  //     }, HttpStatus.INTERNAL_SERVER_ERROR);
  //   }
  // }
  // @Get('emails')
  // async fetchEmail(){
  //   try{
  //     const emails=await fetchEmail()
  //     return{
  //       status:'success',
  //       data:emails
  //     }
  //   }catch(error){
  
  //   }
  // }
}


