import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';
import * as cheerio from 'cheerio';
import { Prisma } from '@prisma/client';
import { IMessage } from './categorization.service';

interface CompanySearchResult {
  id: string;
  client_name: string;
  email_domain: string;
  match_score: number;
}

@Injectable()
export class CompanyClassificationService {
  private readonly logger = new Logger(CompanyClassificationService.name);
  private readonly MATCH_THRESHOLD = 0.1;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  public async processEmail(message: IMessage): Promise<CompanySearchResult[]> {
    this.logger.log(
      `Processing email for company classification: ${message.id}`,
    );

    try {
      // Extract searchable text from the message
      const searchText = this.prepareSearchText(message);

      // Find matching companies
      const companyMatches = await this.findCompanyMatches(searchText);

      // Create database relationships for matches
      if (companyMatches.length > 0) {
        await this.createCompanyRelations(message.id, companyMatches);
      }

      return companyMatches;
    } catch (error) {
      this.logger.error(
        `Error processing email ${message.id}: ${error.message}`,
      );
      throw error;
    }
  }

  private async findCompanyMatches(
    messageText: string,
  ): Promise<CompanySearchResult[]> {
    const searchQuery = Prisma.sql`
            SELECT 
                o.id,
                o.client_name,
                o.email_domain,
                (
                    ts_rank_cd(to_tsvector('english', client_name), query) * 0.4 +
                    ts_rank_cd(to_tsvector('english', COALESCE(email_domain, '')), query) * 0.3 +
                    ts_rank_cd(to_tsvector('english', COALESCE(website_domain, '')), query) * 0.3
                ) as match_score
            FROM organizations o, plainto_tsquery('english', ${messageText}) query
            WHERE 
                to_tsvector('english', client_name) @@ query OR
                to_tsvector('english', COALESCE(email_domain, '')) @@ query OR
                to_tsvector('english', COALESCE(website_domain, '')) @@ query
            HAVING 
                (
                    ts_rank_cd(to_tsvector('english', client_name), query) * 0.4 +
                    ts_rank_cd(to_tsvector('english', COALESCE(email_domain, '')), query) * 0.3 +
                    ts_rank_cd(to_tsvector('english', COALESCE(website_domain, '')), query) * 0.3
                ) > ${this.MATCH_THRESHOLD}
            ORDER BY match_score DESC
            LIMIT 10
        `;

    try {
      const results =
        await this.prisma.primary.$queryRaw<CompanySearchResult[]>(searchQuery);

      this.logger.debug(
        'Company search results:',
        results.map((company) => ({
          name: company.client_name,
          score: company.match_score,
        })),
      );

      return results || [];
    } catch (error) {
      this.logger.error(`Error in company search: ${error.message}`);
      throw error;
    }
  }

  private async createCompanyRelations(
    messageId: string,
    matches: CompanySearchResult[],
  ) {
    try {
      await this.prisma.primary.$transaction(async (tx) => {
        // Delete existing relations
        await tx.messageCompanyRelation.deleteMany({
          where: { message_id: messageId },
        });

        // Create new relations
        await tx.messageCompanyRelation.createMany({
          data: matches.map((match) => ({
            message_id: messageId,
            company_id: match.id,
            relevance_score: match.match_score,
            match_reasons: {
              text_match_score: match.match_score,
              match_type: 'text_search',
            },
          })),
        });
      });
    } catch (error) {
      this.logger.error(`Error creating company relations: ${error.message}`);
      throw error;
    }
  }

  private prepareSearchText(message: IMessage): string {
    const plainBody = this.htmlToText(message.body);
    const emailDomains = this.extractEmailDomains(message);

    return [message.subject, plainBody, ...emailDomains]
      .filter(Boolean)
      .join(' ')
      .slice(0, 1000); // Limit search text length for performance
  }

  private extractEmailDomains(message: IMessage): string[] {
    const domains = new Set<string>();

    // Add sender domain
    domains.add(this.extractDomain(message.sender_email));

    // Add recipient domains
    const addDomains = (emailList: any) => {
      const emails = this.parseJsonEmails(emailList);
      emails?.forEach((email) => {
        const domain = this.extractDomain(email);
        if (domain) domains.add(domain);
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

  private parseJsonEmails(jsonField: any): string[] | null {
    if (!jsonField) return null;

    if (
      typeof jsonField === 'object' &&
      !Array.isArray(jsonField) &&
      jsonField.email
    ) {
      return [jsonField.email];
    }

    if (Array.isArray(jsonField)) {
      return jsonField
        .map((item) => {
          if (typeof item === 'object' && item !== null && 'email' in item) {
            return (item as { email: string }).email;
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
