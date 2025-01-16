// src/email/dto/email.dto.ts
import { Prisma } from '@prisma/client';
import { z } from 'zod';

export interface EmailAttachment {
  name: string;
  content_type: string;
}

export interface EmailParticipant {
  name: string;
  email: string;
}
export interface ClassificationInstance {
  name: string;
  confidence: number;
  metadata: Record<string, any>;
  similarityScore?: number;
}

export interface Classification {
  category: string;
  instances: ClassificationInstance[];
}

export interface ClassificationResponse {
  classifications: Classification[];
}

export interface RawEmailData {
  subject: string;
  sender: EmailParticipant;
  receiver: EmailParticipant;
  body: string;
  sent_datetime: string;
  received_datetime: string;
  has_attachments: boolean;
  attachments?: EmailAttachment[];
}

export interface EmailDataStructure {
  [email: string]: RawEmailData[];
}

export class CreateEmailDto {
  subject: string;
  body: string;
  sentDateTime: Date;
  receivedDateTime: Date;
  hasAttachments: boolean;
  sender: Prisma.JsonValue;
  receiver: Prisma.JsonValue;
}
export type EmailWithEmbedding = Prisma.EmailCreateInput & {
  embedding?: number[];
};

export interface SimilarEmail {
  id: string;
  subject: string;
  body: string;
  sentDateTime: Date;
  receivedDateTime: Date;
  hasAttachments: boolean;
  sender: string;
  receiver: string;
  embedding: string;
  similarity: number;
  entities: string[];
  entity_confidence: number;
}
export interface UploadPathDto {
  filePath: string;
}



// Add other existing types...


// export type EmailCreateInputWithVector = Prisma.EmailCreateInput & {
//   embedding?: vector;
// };