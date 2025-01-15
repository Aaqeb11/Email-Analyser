// import { Injectable, Logger } from '@nestjs/common';
// import { PrismaService } from 'prisma/prisma.service';

// // Validation result interface
// interface ValidationResult {
//   isValid: boolean;
//   errors: ValidationError[];
//   warnings: ValidationWarning[];
// }

// interface ValidationError {
//   category: string;
//   instanceName: string;
//   error: string;
//   code: string;
// }

// interface ValidationWarning {
//   category: string;
//   instanceName: string;
//   warning: string;
//   code: string;
// }

// @Injectable()
// export class ClassificationValidationService {
//   private readonly logger = new Logger(ClassificationValidationService.name);

//   constructor(private prisma: PrismaService) {}

//   async validateClassifications(
//     classifications: any,
//     email: any,
//     similarEmails: any[]
//   ): Promise<ValidationResult> {
//     const result: ValidationResult = {
//       isValid: true,
//       errors: [],
//       warnings: []
//     };

//     try {
//       // 1. Required Categories Validation
//       await this.validateRequiredCategories(classifications, result);

//       // 2. Client Validation
//       await this.validateClients(classifications, result);

//       // 3. Position Validation
//       await this.validatePositions(classifications, result);

//       // 4. Contact Validation
//       await this.validateContacts(classifications, email, result);

//       // 5. Stage Validation
//       await this.validateStages(classifications, similarEmails, result);

//       // 6. Cross-field Validation
//       await this.validateCrossFieldRelationships(classifications, result);

//       // 7. Confidence Score Validation
//       this.validateConfidenceScores(classifications, result);

//       // Set overall validity
//       result.isValid = result.errors.length === 0;

//       return result;
//     } catch (error) {
//       this.logger.error(`Validation error: ${error.message}`);
//       throw error;
//     }
//   }

//   private async validateRequiredCategories(classifications: any, result: ValidationResult) {
//     const requiredCategories = ['Clients', 'Positions', 'Contacts'];

//     for (const category of requiredCategories) {
//       if (!classifications[category] || classifications[category].instances.length === 0) {
//         result.errors.push({
//           category,
//           instanceName: 'N/A',
//           error: `Required category ${category} is missing or empty`,
//           code: 'REQUIRED_CATEGORY_MISSING'
//         });
//       }
//     }
//   }

//   private async validateClients(classifications: any, result: ValidationResult) {
//     const clients = classifications.Clients?.instances || [];

//     for (const client of clients) {
//       // 1. Check if client exists in database
//       const existingClient = await this.prisma.entityInstance.findFirst({
//         where: {
//           name: client.name,
//           entity: {
//             name: 'Clients'
//           }
//         }
//       });

//       if (!existingClient) {
//         result.warnings.push({
//           category: 'Clients',
//           instanceName: client.name,
//           warning: 'New client detected, verify details',
//           code: 'NEW_CLIENT_WARNING'
//         });
//       }

//       // 2. Validate client name format
//       if (!this.isValidCompanyName(client.name)) {
//         result.errors.push({
//           category: 'Clients',
//           instanceName: client.name,
//           error: 'Invalid company name format',
//           code: 'INVALID_CLIENT_NAME'
//         });
//       }

//       // 3. Check metadata requirements
//       if (!client.metadata?.type) {
//         result.warnings.push({
//           category: 'Clients',
//           instanceName: client.name,
//           warning: 'Client type metadata missing',
//           code: 'MISSING_CLIENT_TYPE'
//         });
//       }
//     }
//   }

//   private async validatePositions(classifications: any, result: ValidationResult) {
//     const positions = classifications.Positions?.instances || [];

//     for (const position of positions) {
//       // 1. Check against known job titles
//       const isValidTitle = await this.validateJobTitle(position.name);
//       if (!isValidTitle) {
//         result.warnings.push({
//           category: 'Positions',
//           instanceName: position.name,
//           warning: 'Non-standard job title detected',
//           code: 'NON_STANDARD_TITLE'
//         });
//       }

//       // 2. Validate required metadata
//       if (position.metadata) {
//         if (typeof position.metadata.count !== 'number') {
//           result.errors.push({
//             category: 'Positions',
//             instanceName: position.name,
//             error: 'Position count must be a number',
//             code: 'INVALID_POSITION_COUNT'
//           });
//         }

//         if (position.metadata.shift &&
//             !['day', 'night', 'rotating'].includes(position.metadata.shift)) {
//           result.errors.push({
//             category: 'Positions',
//             instanceName: position.name,
//             error: 'Invalid shift type',
//             code: 'INVALID_SHIFT_TYPE'
//           });
//         }
//       }
//     }
//   }

//   private async validateContacts(
//     classifications: any,
//     email: any,
//     result: ValidationResult
//   ) {
//     const contacts = classifications.Contacts?.instances || [];

//     for (const contact of contacts) {
//       // 1. Validate email format
//       if (contact.metadata?.email && !this.isValidEmail(contact.metadata.email)) {
//         result.errors.push({
//           category: 'Contacts',
//           instanceName: contact.name,
//           error: 'Invalid email format',
//           code: 'INVALID_EMAIL'
//         });
//       }

//       // 2. Check sender/receiver consistency
//       if (contact.metadata?.email === email.sender.email) {
//         const nameMatch = this.compareNames(contact.name, email.sender.name);
//         if (!nameMatch) {
//           result.warnings.push({
//             category: 'Contacts',
//             instanceName: contact.name,
//             warning: 'Contact name differs from email sender name',
//             code: 'NAME_MISMATCH'
//           });
//         }
//       }
//     }
//   }

//   private async validateStages(
//     classifications: any,
//     similarEmails: any[],
//     result: ValidationResult
//   ) {
//     const stages = classifications.Stages?.instances || [];
//     const validStages = [
//       'Prospect',
//       'Lead Generation',
//       'Opportunity',
//       'Fulfillment',
//       'Deal',
//       'Sale'
//     ];

//     // Check stage progression logic
//     if (stages.length > 0) {
//       const currentStage = stages[0].name;
//       const previousStages = await this.getPreviousStages(similarEmails);

//       if (!this.isValidStageProgression(previousStages, currentStage)) {
//         result.warnings.push({
//           category: 'Stages',
//           instanceName: currentStage,
//           warning: 'Unusual stage progression detected',
//           code: 'INVALID_STAGE_PROGRESSION'
//         });
//       }
//     }
//   }

//   private async validateCrossFieldRelationships(
//     classifications: any,
//     result: ValidationResult
//   ) {
//     // 1. Validate Client-Contact relationships
//     const clients = classifications.Clients?.instances || [];
//     const contacts = classifications.Contacts?.instances || [];

//     for (const contact of contacts) {
//       if (contact.metadata?.clientName) {
//         const clientExists = clients.some(
//           client => client.name === contact.metadata.clientName
//         );

//         if (!clientExists) {
//           result.errors.push({
//             category: 'Contacts',
//             instanceName: contact.name,
//             error: 'Contact associated with non-existent client',
//             code: 'INVALID_CLIENT_REFERENCE'
//           });
//         }
//       }
//     }

//     // 2. Validate Position-Client relationships
//     const positions = classifications.Positions?.instances || [];

//     for (const position of positions) {
//       if (position.metadata?.clientName) {
//         const clientExists = clients.some(
//           client => client.name === position.metadata.clientName
//         );

//         if (!clientExists) {
//           result.errors.push({
//             category: 'Positions',
//             instanceName: position.name,
//             error: 'Position associated with non-existent client',
//             code: 'INVALID_CLIENT_REFERENCE'
//           });
//         }
//       }
//     }
//   }

//   private validateConfidenceScores(classifications: any, result: ValidationResult) {
//     const MIN_CONFIDENCE = 0.7;

//     for (const category in classifications) {
//       const instances = classifications[category]?.instances || [];

//       for (const instance of instances) {
//         if (instance.confidence < MIN_CONFIDENCE) {
//           result.warnings.push({
//             category,
//             instanceName: instance.name,
//             warning: 'Low confidence classification',
//             code: 'LOW_CONFIDENCE'
//           });
//         }
//       }
//     }
//   }

//   // Helper methods
//   private isValidCompanyName(name: string): boolean {
//     // Basic company name validation
//     return name.length >= 2 && /^[A-Za-z0-9\s\-&\.]+$/.test(name);
//   }

//   private isValidEmail(email: string): boolean {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   }

//   private compareNames(name1: string, name2: string): boolean {
//     // Normalize names for comparison
//     const normalize = (name: string) => {
//       return name.toLowerCase().replace(/[^a-z0-9]/g, '');
//     };
//     return normalize(name1) === normalize(name2);
//   }

//   private async validateJobTitle(title: string): Promise<boolean> {
//     // Check against known job titles in database
//     const knownTitle = await this.prisma.jobTitle.findFirst({
//       where: {
//         name: {
//           contains: title,
//           mode: 'insensitive'
//         }
//       }
//     });
//     return !!knownTitle;
//   }

//   private async getPreviousStages(similarEmails: any[]): Promise<string[]> {
//     // Extract stages from similar emails
//     const stages = [];
//     for (const email of similarEmails) {
//       const emailStages = await this.prisma.emailEntity.findMany({
//         where: {
//           emailId: email.id,
//           entity: {
//             name: 'Stages'
//           }
//         },
//         include: {
//           entityInstance: true
//         }
//       });
//       stages.push(...emailStages.map(stage => stage.entityInstance.name));
//     }
//     return stages;
//   }

//   private isValidStageProgression(
//     previousStages: string[],
//     currentStage: string
//   ): boolean {
//     const stageOrder = [
//       'Prospect',
//       'Lead Generation',
//       'Opportunity',
//       'Fulfillment',
//       'Deal',
//       'Sale'
//     ];

//     if (previousStages.length === 0) {
//       return currentStage === 'Prospect' || currentStage === 'Lead Generation';
//     }

//     const lastStage = previousStages[previousStages.length - 1];
//     const lastStageIndex = stageOrder.indexOf(lastStage);
//     const currentStageIndex = stageOrder.indexOf(currentStage);

//     // Allow same stage or one stage forward
//     return currentStageIndex === lastStageIndex ||
//            currentStageIndex === lastStageIndex + 1;
//   }
// }
