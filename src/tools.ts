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
const classificationSchema = z.object({
    classifications: z.array(
      z.object({
        category: z.string(),
        instances: z.array(
          z.object({
            name: z.string(),
            confidence: z.number(),
            metadata: z.record(z.any()).optional().default({}),
          }),
        ),
      }),
    ),
  });
export const fetchEmailsTool = tool(
    async (input: { batchSize?: number } = {}) => {
      try {
        const batchSize = input.batchSize || 10;
        
        // Enhanced fetch with proper filtering and embeddings check
        const emails = await prisma.email.findMany({
          where: {
            AND: [
              {
                emailEntities: {
                  none: {} // No existing classifications
                }
              },
            //   {
            //     embedding: {
            //       not: null // Ensure email has embedding
            //     }
            //   }
            ]
          },
          select: {
            id: true,
            subject: true,
            body: true,
            sentDateTime: true,
            receivedDateTime: true,
            hasAttachments: true,
            sender: true,
            receiver: true,
            // attachments: {
            //   select: {
            //     name: true,
            //     contentType: true
            //   }
            // }
          },
          take: batchSize,
        //   orderBy: {
        //     sentDateTime: 'desc'
        //   },
        });
  
        console.log("Fetched emails:", {
          count: emails.length,
          sampleEmail: emails[0] ? {
            id: emails[0].id,
            subject: emails[0].subject,
            hasBody: !!emails[0].body,
            // attachments: emails[0].attachments
          } : null
        });
  
        return {
          status: "success",
          message: `Found ${emails.length} unclassified emails`,
          emails: emails
        };
      } catch (error) {
        console.error('Error in fetchEmailsTool:', error);
        return {
          status: "error",
          message: `Error fetching emails: ${error.message}`,
          error: error
        };
      }
    },
    {
      name: "fetchEmailsTool",
      description: "Fetches unclassified emails with embeddings from the database"
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

        console.log()
  
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
const createEntityValidationTool = (entityType: string, description: string) => {
    return tool(
      async (input: z.infer<typeof classificationSchema>) => {
        try {
          console.log(`Input to ${entityType} validation:`, JSON.stringify(input, null, 2));
          console.log("this is the input",input)
          
          const entityCategory = await prisma.entity.upsert({
            where: { name: entityType },
            create: { name: entityType },
            update: {},
          });
  
          const validatedInstances = [];
  
          for (const classification of input.classifications) {
            if (classification.instances && Array.isArray(classification.instances)) {
              const highConfidenceInstances = classification.instances.filter(
                instance => instance.confidence >= 0.95
              );

              console.log(`High confidence instances for ${entityType}:`, 
                JSON.stringify(highConfidenceInstances, null, 2));

              for (const instance of highConfidenceInstances) {
                let entityInstance = await prisma.entityInstance.findFirst({
                  where: {
                    name: instance.name,
                    entityId: entityCategory.id,
                  },
                });
    
                if (!entityInstance) {
                  entityInstance = await prisma.entityInstance.create({
                    data: {
                      name: instance.name,
                      metadata: instance.metadata || {},
                      entity: {
                        connect: {
                          id: entityCategory.id,
                        },
                      },
                    },
                  });
                }
    
                // Keep ALL original instance properties
                validatedInstances.push({
                  ...instance,  // This preserves ALL original properties
                  name: entityInstance.name,
                });
              }
            }
          }

          const result = {
            classifications: [
              {
                category: entityType,
                instances: validatedInstances
              },
            ],
          };

          console.log(`Output from ${entityType} validation:`, JSON.stringify(result, null, 2));
          return result;

        } catch (error) {
          console.error(`Error in ${entityType} validation:`, error);
          return {
            classifications: [
              {
                category: entityType,
                instances: [],
              },
            ],
            error: `Error validating ${entityType}: ${error.message}`,
          };
        }
      },
      {
        name: `${entityType}ValidationTool`,
        description: `Validates and processes ${entityType} entities in the email classification. Only accepts classifications with confidence level >= 95%. Always Include the metadata in the response`,
        schema: classificationSchema,
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

// Tool to fetch similar emails using semantic and keyword search
export const ALL_TOOLS = [
    // fetchEmailsTool,
    // processEmailTool,
    clientValidationTool,
    contactValidationTool,
    positionValidationTool,
    candidateValidationTool,
    locationValidationTool,
    pocValidationTool,
    // storeClassificationTool,
    // fetchSimilarEmailsTool
];

export const fetchEmail=async()=>{
    return await prisma.email.findMany({
        take:10
    })
}

export const prompt=`You are an email analyzer for ProficientNow, a specialized staffing company focused on technical recruitment. Your task is to analyze emails and classify them according to ProficientNow's business workflow and sales pipeline stages. 

Pipeline Stage Classification:
- Prospect Stage: Initial research and information gathering
- Lead Generation Stage: First contact and follow-up communications
- Opportunity Stage: Transfer to BDM and requirement gathering
- Fulfillment Stage: Active recruitment and interview coordination
- Deal Stage: Contract negotiations and terms
- Sale Stage: Successful placement and payment processing

Communication Type:
- Cold Outreach: Initial contact with potential clients
- Client Response: Client replies and ongoing discussions
- Candidate Submission: Presenting candidates to clients
- Interview Coordination: Scheduling and feedback
- Contract/Terms Discussion: Negotiation and agreement
- Internal Transfer: Communication between ProficientNow teams

Action Items:
- Required Follow-ups
- Pending Responses
- Scheduled Interviews
- Document Requirements
- Contract Status
- Payment Terms

Business Intelligence:
- Client Pain Points
- Competitive Information
- Market Rate Insights
- Hiring Trends
- Process Bottlenecks

Analyze each email considering these key aspects:

Key Entity Extraction:

For Companies:
- Company Name (except for ProficientNow)
- Industry/Sector
- Location
- Current Requirements
- Contacts

For Positions:
- Job Title
- Required Skills
- Experience Level
- Work Schedule/Shift
- Location
- Salary Range
- Additional Benefits
- Position Type (Contract/Full-time)

For Contacts(client contacts only):
- Name
- Role/Title
- Department
- Contact Information
- Decision-Making Authority
- Communication Preference

For Candidates:
- Current Status (Submitted/Interviewed/Placed)
- Key Skills
- Experience Level
- Availability
- Shift Preference
- Expected Salary
- Interview Performance
- Client Feedback


{similarEmailsContext}

Classify the email into these categories and identify specific instances:
{categories}
`

export const VALIDATOR_PROMPT = `You are a high-precision email content validator for ProficientNow, a technical staffing company. Your role is to validate and refine the AI's initial classifications of email content. You will receive a JSON object with various classifications and must verify each one with high precision. If the email is a repeating one, then no need to validate,use the earlier validation if any.

REQUIREMENT: Each classification must meet these validation criteria:

1. Entity Validation Rules:

Clients:
- Must be actual company names (not departments/divisions and not ProficientNow itself.)
- Must have confirmable location/industry in the email
- Confidence must be downgraded if information is incomplete

Contacts:
- These point to external entities not belonging to ProficientNow.
- Must be full names of individuals
- Must have clear role/company affiliation
- Must appear in email sender/receiver or be directly mentioned

Candidates:
- Must be individuals being considered for positions
- Must have associated skills or experience mentioned
- Must be in active recruitment/interview process

Positions:
- Must be specific job titles
- Must have associated requirements/qualifications
- Must be active openings mentioned in the email

Locations:
- Must be the location(s) of the position(s) in the conversation.

Point of Contacts:
- These contacts are the point of contacts from ProficientNow to clients/candidates and are the employees of ProficientNow only.
- Must be actively involved in the communication

2. Confidence Scoring Rules:
HIGH CONFIDENCE (0.95-1.0):
- Explicitly mentioned in email
- Clear context and role
- Multiple confirming references

MEDIUM CONFIDENCE (0.7-0.94):
- Mentioned but with some ambiguity
- Limited context
- Single reference point

LOW CONFIDENCE (<0.7):
- Implied but not stated
- Unclear context
- Potential ambiguity

3. Required Metadata:
Each entity must have appropriate metadata:
- Clients: {industry, location, size if mentioned}
- Contacts: {role, company, department}
- Candidates: {skills, experience, availability}
- Positions: {requirements, location, salary range}
- Locations: {city, state, zip if available}
- Point of Contacts: {role, authority level, department}

Process:
1. Review each classification
2. Validate against email content
3. Verify metadata completeness
4. Adjust confidence scores
5. Remove invalid classifications
6. Add missing critical metadata

Output Format:
Return a refined JSON object with only validated classifications:
{
  "classifications": [
    {
      "category": "string",
      "instances": [
        {
          "name": "string",
          "confidence": number,
          "metadata": {
            [key: string]: any
          }
        }
      ]
    }
  ]
}

Example Entity Validation:
✓ Client "Acme Corp" mentioned in email header
✓ Contact "John Smith" is email sender
✗ Candidate mention without skills/experience
✗ Location without city/state specification

Current Classifications:
{classification}

Email Content:
{emailContent}

Provide validated classifications maintaining high precision and removing any entities that don't meet the strict validation criteria.`