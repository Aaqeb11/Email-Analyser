import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export const EmbeddingMessageSwagger = (): MethodDecorator => {
  return applyDecorators(
    ApiOperation({
      summary: 'Categorize email message and generate vector embeddings',
      description:
        'Process an email message for categorization and generate embeddings.',
    }),
    ApiResponse({
      status: 201,
      description: 'Message queued successfully.',
      content: {
        'application/json': {
          example: {
            status: 'success',
            message: 'Queued new email uuid-1234 for processing',
          },
        },
      },
    }),
    ApiResponse({
      status: 400,
      description: 'Bad Request. Invalid message format.',
      content: {
        'application/json': {
          example: {
            status: 'error',
            message: 'Invalid message format',
            errors: [
              {
                field: 'sender_email',
                message: 'Sender email is required',
              },
              {
                field: 'body',
                message: 'Message body is required',
              },
            ],
          },
        },
      },
    }),
    ApiResponse({
      status: 500,
      description: 'Internal Server Error.',
      content: {
        'application/json': {
          example: {
            status: 'error',
            message:
              'An unexpected error occurred while processing the message.',
          },
        },
      },
    }),
  );
};
