import { tool } from "@langchain/core/tools";
import { Prisma, PrismaClient } from '@prisma/client';
import OpenAI from "openai";
import { z } from 'zod';
import { SimilarEmail } from "./types";

const prisma = new PrismaClient();

// Schema for entity validation
const entityValidationSchema = z.object({
  name: z.string(),
  metadata: z.record(z.any()).optional(),
  category: z.string(),
  confidence: z.number().optional(),
});

export const fetchEmailsTool = tool(
    async (input: { batchSize?: number } = {}) => {
      try {
        const batchSize = input.batchSize || 10;
        
        // Fetch unclassified emails (emails without any emailEntities)
        const emails = await prisma.email.findMany({
          where: {
            emailEntities: {
              none: {}  // This means no related emailEntities
            }
          },
          take: batchSize,
          orderBy: {
            sentDateTime: 'desc'
          }
        });
  
        if (emails.length === 0) {
          return {
            status: "success",
            message: "No unclassified emails found",
            emails: []
          };
        }
  
        return {
          status: "success",
          message: `Found ${emails.length} unclassified emails`,
          emails: emails
        };
      } catch (error) {
        return {
          status: "error",
          message: `Error fetching emails: ${error.message}`,
          error: error
        };
      }
    },
    {
      name: "fetchEmailsTool",
      description: "Fetches unclassified emails from the database",
      schema: z.object({
        batchSize: z.number().optional().describe("Number of emails to fetch")
      })
    }
  );
  
  // Tool for single email processing
  export const processEmailTool = tool(
    async (input: { emailId: string }) => {
      try {
        const email = await prisma.email.findUnique({
          where: { id: input.emailId }
        });
  
        if (!email) {
          throw new Error("Email not found");
        }
  
        const emailContent = `
          Subject: ${email.subject}
          Body: ${email.body}
          From: ${JSON.stringify(email.sender)}
          To: ${JSON.stringify(email.receiver)}
          Sent Date: ${email.sentDateTime}
        `.trim();
  
        return {
          status: "success",
          email: email,
          emailContent: emailContent
        };
      } catch (error) {
        return {
          status: "error",
          message: `Error processing email: ${error.message}`,
          error: error
        };
      }
    },
    {
      name: "processEmailTool",
      description: "Processes a single email for classification",
      schema: z.object({
        emailId: z.string().describe("ID of the email to process")
      })
    }
  );

// Base validation tool factory
const createEntityValidationTool = (
  entityType: string,
  description: string
) => {
  return tool(
    async (input: z.infer<typeof entityValidationSchema>) => {
      try {
        // First find or create the entity type
        const entityCategory = await prisma.entity.upsert({
          where: { name: entityType },
          create: { name: entityType },
          update: {}
        });

        // Check if entity instance exists
        const existingInstance = await prisma.entityInstance.findFirst({
          where: {
            name: input.name,
            entityId: entityCategory.id
          }
        });

        if (existingInstance) {
          return {
            status: "exists",
            message: `✓ ${input.name} found in ${entityType} records`,
            instance: existingInstance
          };
        }

        // If not exists, create new entity instance
        const newInstance = await prisma.entityInstance.create({
          data: {
            name: input.name,
            metadata: input.metadata || {},
            entity: {
              connect: {
                id: entityCategory.id
              }
            }
          }
        });

        return {
          status: "created",
          message: `+ Created new ${entityType}: ${input.name}`,
          instance: newInstance
        };
      } catch (error) {
        return {
          status: "error",
          message: `Error processing ${entityType}: ${error.message}`,
          error: error
        };
      }
    },
    {
      name: `${entityType}ValidationTool`,
      description: description,
      schema: entityValidationSchema,
    }
  );
};

// Create specific validation tools
export const clientValidationTool = createEntityValidationTool(
  "Client",
  "Validates and processes client entities in the email classification"
);

export const contactValidationTool = createEntityValidationTool(
  "Contact",
  "Validates and processes contact entities in the email classification"
);

export const positionValidationTool = createEntityValidationTool(
  "Position",
  "Validates and processes job position entities in the email classification"
);

export const candidateValidationTool = createEntityValidationTool(
  "Candidate",
  "Validates and processes candidate entities in the email classification"
);

export const locationValidationTool = createEntityValidationTool(
  "Location",
  "Validates and processes location entities in the email classification"
);

export const pocValidationTool = createEntityValidationTool(
  "POC",
  "Validates and processes point of contact entities in the email classification"
);

// Updated schema for storing classifications
const storeClassificationSchema = z.object({
  emailId: z.string(),
  classifications: z.array(z.object({
    instance: z.object({
      id: z.string(),
      name: z.string(),
      entityId: z.string(),
      metadata: z.record(z.any())
    }),
    confidence: z.number(),
  }))
});

// Updated tool for storing classifications
export const storeClassificationTool = tool(
  async (input: z.infer<typeof storeClassificationSchema>) => {
    try {
      const results = await prisma.$transaction(async (tx) => {
        const createdEntities = await Promise.all(
          input.classifications.map(classification => 
            tx.emailEntity.create({
              data: {
                email: { connect: { id: input.emailId } },
                entity: { connect: { id: classification.instance.entityId } },
                entityInstance: { connect: { id: classification.instance.id } },
                confidence: classification.confidence
              }
            })
          )
        );

        return createdEntities;
      });

      return {
        status: "success",
        message: "Classifications stored successfully",
        results
      };
    } catch (error) {
      return {
        status: "error",
        message: `Error storing classifications: ${error.message}`,
        error: error
      };
    }
  },
  {
    name: "storeClassificationTool",
    description: "Stores validated classifications in the database",
    schema: storeClassificationSchema
  }
);

// Tool to fetch similar emails using semantic and keyword search
export const fetchSimilarEmailsTool = tool(
  async (input: { emailContent: string, limit?: number }) => {
    try {
      // Generate embedding for the email content
      const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const embedding = await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: input.emailContent,
      });

      const vectorString = JSON.stringify(embedding.data[0].embedding);
      const similarityThreshold = 0.7;
      const limit = input.limit || 2;

      const hybridSearchQuery = Prisma.sql`
        WITH semantic_search AS (
          SELECT 
            id, 
            RANK() OVER (ORDER BY "embedding" <=> ${vectorString}::vector) as rank,
            "embedding"::text as embedding_text
          FROM "Email"
          ORDER BY "embedding" <=> ${vectorString}::vector
          LIMIT 5
        ),
        keyword_search AS (
          SELECT 
            id,
            RANK() OVER (
              ORDER BY ts_rank_cd(to_tsvector('english', body), query) DESC
            ) as rank
          FROM "Email", plainto_tsquery('english', ${input.emailContent}) query
          WHERE to_tsvector('english', body) @@ query
          ORDER BY ts_rank_cd(to_tsvector('english', body), query) DESC
          LIMIT 5
        )
        SELECT 
          e.id,
          e.subject,
          e.body,
          e."sentDateTime",
          e."receivedDateTime",
          e."hasAttachments",
          e.sender::text as sender,
          e.receiver::text as receiver,
          e."embedding"::text as embedding,
          (COALESCE(1.0 / (10 + semantic_search.rank), 0.0) +
           COALESCE(1.0 / (10 + keyword_search.rank), 0.0)) as similarity
        FROM "Email" e
        LEFT JOIN semantic_search ON e.id = semantic_search.id
        LEFT JOIN keyword_search ON e.id = keyword_search.id
        WHERE (semantic_search.id IS NOT NULL OR keyword_search.id IS NOT NULL)
        AND (COALESCE(1.0 / (10 + semantic_search.rank), 0.0) +
             COALESCE(1.0 / (10 + keyword_search.rank), 0.0)) > ${similarityThreshold}
        ORDER BY similarity DESC
        LIMIT ${limit}
      `;

const similarEmails = await prisma.$queryRaw<SimilarEmail[]>(hybridSearchQuery);
      
      // Process similar emails to extract their existing classifications
      const emailsWithClassifications = await Promise.all(
        similarEmails.map(async (email: any) => {
          const classifications = await prisma.emailEntity.findMany({
            where: { emailId: email.id },
            include: {
              entity: true,
              entityInstance: true
            }
          });

          return {
            ...email,
            classifications: classifications.map(c => ({
              category: c.entity.name,
              instance: {
                name: c.entityInstance.name,
                confidence: c.confidence,
                metadata: c.entityInstance.metadata
              }
            }))
          };
        })
      );

      return {
        status: "success",
        similarEmails: emailsWithClassifications,
        message: `Found ${emailsWithClassifications.length} similar emails using hybrid search`
      };
    } catch (error) {
      return {
        status: "error",
        message: `Error finding similar emails: ${error.message}`,
        error: error
      };
    }
  },
  {
    name: "fetchSimilarEmailsTool",
    description: "Fetches similar emails for classification context"
  }
);

export const ALL_TOOLS = [
    fetchEmailsTool,
    processEmailTool,
    clientValidationTool,
    contactValidationTool,
    positionValidationTool,
    candidateValidationTool,
    locationValidationTool,
    pocValidationTool,
    storeClassificationTool,
    fetchSimilarEmailsTool
  ];