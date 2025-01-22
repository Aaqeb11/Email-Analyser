import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';
import * as cheerio from 'cheerio';
// import { Prisma } from '@prisma/client';
import { IMessage } from './categorization.service';
import { Prisma } from 'prisma/generated/client-primary';
import { randomUUID } from 'crypto';

interface CompanySearchResult {
  id: string;
  client: string | null;
  email_domain: string | null;
  website_domain: string | null;
  match_score: number;
}

interface DetailedCompanySearchResult {
  company: {
    id: string;
    client: string | null;
    email_domain: string | null;
    website_domain: string | null;
    match_score: number;
  };
  associatedContacts: {
    email: string;
    name?: string;
    type: 'sender' | 'recipient' | 'cc' | 'bcc';
    matched_domain: string;
  }[];
}

interface EmailContact {
  email: string;
  name?: string;
  type: 'sender' | 'recipient' | 'cc' | 'bcc';
}

@Injectable()
export class CompanyClassificationService {
  private readonly logger = new Logger(CompanyClassificationService.name);
  private readonly MATCH_THRESHOLD = 0.1;
  private readonly GENERIC_DOMAINS = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'aol.com',
    'icloud.com',
    'protonmail.com',
    'live.com',
    'msn.com',
    'me.com',
    'yandex.com',
    'linkedin.com',
    'facebook.com',
    'twitter.com',
    'instagram.com',
    'indeed.com',
    'monster.com',
    'glassdoor.com',
    'careerbuilder.com'
  ];

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  public async processEmail(message: IMessage): Promise<DetailedCompanySearchResult[]> {
    this.logger.log(
      `Processing email for company classification: ${message.id}`,
    );
  
    try {
      const contacts = this.extractContacts(message);
      const searchText = this.prepareSearchText(message);
      const companyMatches = await this.findCompanyMatches(searchText);
      
      // Create detailed results with contact associations
      const detailedResults: DetailedCompanySearchResult[] = companyMatches.map(company => {
        const associatedContacts = contacts.filter(contact => {
          const contactDomain = this.extractDomain(contact.email);
          return (
            (company.email_domain && contactDomain === company.email_domain.toLowerCase()) ||
            (company.website_domain && contactDomain === company.website_domain.toLowerCase())
          );
        }).map(contact => ({
          ...contact,
          matched_domain: this.extractDomain(contact.email)
        }));
  
        return {
          company: {
            id: company.id,
            client: company.client,
            email_domain: company.email_domain,
            website_domain: company.website_domain,
            match_score: company.match_score
          },
          associatedContacts
        };
      });
  
      // if (detailedResults.length > 0) {
      //   await this.createCompanyRelations(message.id, companyMatches, contacts);
      // }
  
      return detailedResults;
    } catch (error) {
      this.logger.error(
        `Error processing email ${message.id}: ${error.message}`,
      );
      throw error;
    }
  }
  

  private async findCompanyMatches(messageText: string): Promise<CompanySearchResult[]> {
    try {
        const domains = messageText
            .split(' ')
            .filter(term => term.includes('.'))
            .map(domain => domain.toLowerCase().trim())
            .filter(domain => !this.GENERIC_DOMAINS.includes(domain));
    
        if (domains.length === 0) {
            return [];
        }

    
        const results = await this.prisma.readonly.organizations.findMany({
            distinct: ['client'],
            where: {
                OR: [
                    {
                        website_domain: {
                            in: domains,
                            mode: 'insensitive',
                            not: 'proficientnow.com'
                        }
                    },
                    {
                        email_domain: {
                            in: domains,
                            mode: 'insensitive',
                            not: 'proficientnow.com'
                        }
                    }
                ]
            },
            select: {
                id: true,
                client: true,
                email_domain: true,
                website_domain: true,
                website: true,
                research_analyst: true,
                status: true
            }
        });
        
        return results.map(result => ({
            id: result.id,
            client: result.client,
            email_domain: result.email_domain,
            website_domain: result.website_domain,
            match_score: 1.0
        }));
    } catch (error) {
        this.logger.error(`Error in company search: ${error.message}`);
        throw error;
    }
}

private async createCompanyRelations(
  messageId: string,
  matches: CompanySearchResult[],
  contacts: EmailContact[]
) {
  try {
      await this.prisma.primary.$transaction(async (tx) => {
          // Create default company status if it doesn't exist
          const defaultStatus = await tx.companyStatus.upsert({
              where: { value: 'ACTIVE' },
              create: {
                  id: randomUUID(),
                  value: 'ACTIVE',
                  key: 'active',
                  field_display_name: 'company_status',
                  color_hex: '00FF00',
                  created_by: 'system'
              },
              update: {}
          });

          // Get full company details from readonly database
          const companyPromises = matches.map(async (match) => {
              const readonlyCompany = await this.prisma.readonly.organizations.findFirst({
                  where: { id: match.id },
                  select: {
                      id: true,
                      client: true,
                      website: true,
                      email_domain: true,
                      website_domain: true,
                      research_analyst: true,
                      poc_email: true,
                      poc_name: true,
                      created: true,
                      created_by: true
                  }
              });

              if (!readonlyCompany) {
                  this.logger.warn(`Company not found in readonly database: ${match.id}, using match data`);
              }

              // Create or update company in primary database
              const company = await tx.company.upsert({
                  where: {
                      domain: match.website_domain || match.email_domain
                  },
                  create: {
                      name: readonlyCompany?.client || match.client || 'Unknown Company',
                      website: readonlyCompany?.website || `https://${match.website_domain || match.email_domain}`,
                      domain: match.website_domain || match.email_domain,
                      status: defaultStatus.value,
                      is_deleted: false,
                      created_by: 'system',
                      organization_id: readonlyCompany?.id || match.id,
                      raw_body: readonlyCompany ? (readonlyCompany as unknown as Prisma.JsonValue) : null
                  },
                  update: {} // Don't update if exists
              });

              return company;
          });

          const companies = await Promise.all(companyPromises);

          // Create message-company relations
          await tx.messageCompanyRelation.createMany({
              data: companies.map((company, index) => ({
                  message_id: messageId,
                  company_id: company.id,
                  relevance_score: matches[index].match_score,
                  match_reasons: {
                      matched_contacts: contacts.map(c => c.email),
                      source_organization_id: matches[index].id
                  }
              }))
          });
      });
  } catch (error) {
      this.logger.error(`Error creating company relations: ${error.message}`);
      throw error;
  }
}

  private prepareSearchText(message: IMessage): string {
    const emailDomains = this.extractEmailDomains(message);
    return emailDomains.join(' ');
  }

  private extractEmailDomains(message: IMessage): string[] {
    const domains = new Set<string>();

    // Add sender domain if not generic
    const senderDomain = this.extractDomain(message.sender_email);
    if (senderDomain && !this.GENERIC_DOMAINS.includes(senderDomain)) {
        domains.add(senderDomain);
    }

    // Add recipient domains if not generic
    const addDomains = (emailList: any) => {
        const emails = this.parseJsonEmails(emailList);
        emails?.forEach((email) => {
            const domain = this.extractDomain(email);
            if (domain && !this.GENERIC_DOMAINS.includes(domain)) {
                domains.add(domain);
            }
        });
    };

    addDomains(message.recipients);
    addDomains(message.cc_recipients);
    addDomains(message.bcc_recipients);

    return Array.from(domains);
}

  private extractDomain(email: string): string {
    return email.split('@')[1]?.toLowerCase() || '';
  }

  // private parseJsonEmails(jsonField: any): string[] | null {
  //   if (!jsonField) return null;

  //   if (
  //     typeof jsonField === 'object' &&
  //     !Array.isArray(jsonField) &&
  //     jsonField.email
  //   ) {
  //     return [jsonField.email];
  //   }

  //   if (Array.isArray(jsonField)) {
  //     return jsonField
  //       .map((item) => {
  //         if (typeof item === 'object' && item !== null && 'email' in item) {
  //           return (item as { email: string }).email;
  //         }
  //         if (typeof item === 'string') {
  //           return item;
  //         }
  //         return null;
  //       })
  //       .filter((email): email is string => email !== null);
  //   }

  //   return null;
  // }
  private parseJsonEmails(jsonField: any): string[] | null {
    if (!jsonField) {
        return null;
    }

    // Handle single recipient object with nested emailAddress structure
    if (typeof jsonField === 'object' && !Array.isArray(jsonField) && jsonField.emailAddress?.address) {
        return [jsonField.emailAddress.address];
    }

    // Handle array of recipients with nested emailAddress structure
    if (Array.isArray(jsonField)) {
        return jsonField
            .map(item => {
                if (typeof item === 'object' && item !== null) {
                    // Handle nested emailAddress structure
                    if (item.emailAddress?.address) {
                        return item.emailAddress.address;
                    }
                    // Fallback for direct email property
                    if (item.email) {
                        return item.email;
                    }
                }
                if (typeof item === 'string') {
                    return item;
                }
                return null;
            })
            .filter((email): email is string => email !== null);
    }

    return null;
}
private extractContacts(message: IMessage): EmailContact[] {
  const contacts: EmailContact[] = [];

  // Add sender
  if (message.sender_email) {
      contacts.push({
          email: message.sender_email,
          name: message.sender_name || undefined,
          type: 'sender'
      });
  }

  // Helper function to add contacts from JSON field
  const addContacts = (emailList: any, type: EmailContact['type']) => {
      const emails = this.parseJsonEmails(emailList);
      if (!emails) return;
      
      emails.forEach(email => {
          contacts.push({ 
              email, 
              type 
          });
      });
  };

  // Add all recipients
  addContacts(message.recipients, 'recipient');
  addContacts(message.cc_recipients, 'cc');
  addContacts(message.bcc_recipients, 'bcc');

  return contacts;
}

  private htmlToText(html: string): string {
    if (!html) return '';
    const $ = cheerio.load(html);

    $('script, style').remove();
    $('div, p, br').after('\n');
    $('li').before('- ');

    let text = $.text();
    text = text.replace(/\s+/g, ' ').trim();

    return text;
  }
}
