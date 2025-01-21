import { Controller, Get, Logger, Post } from "@nestjs/common";
import { CategorizationService } from "./categorization.service";
import { PrismaService } from "src/prisma.service";

@Controller()
export class CategorizationController {
    private readonly logger = new Logger(CategorizationController.name);
    private readonly BATCH_SIZE = 100;

    constructor(
        private categorizationService: CategorizationService,
        private prisma: PrismaService
    ) {}

    @Get('health')
    getHealth(): string {
        return 'service healthy.';
    }

    @Post('categorize')
    async categorizeAllMessages(): Promise<string> {
        this.logger.log('Starting batch categorization of all messages');
        
        try {
            let processedCount = 0;
            let successCount = 0;
            let failureCount = 0;
            let skip = 0;

            while (true) {
                // Fetch batch of messages with only necessary fields
                const messages = await this.prisma.primary.message.findMany({
                    take: this.BATCH_SIZE,
                    skip: skip,
                    orderBy: {
                        created_at: 'asc'
                    },
                    select: {
                        id: true,
                        ms_message_id: true,
                        subject: true,
                        sender_name: true,
                        sender_email: true,
                        body: true,
                        recipients: true,
                        cc_recipients: true,
                        bcc_recipients: true,
                        meta_data: true
                    }
                });

                // Break if no more messages
                if (messages.length === 0) {
                    break;
                }

                // Process batch
                for (const message of messages) {
                    try {
                        const result = await this.categorizationService.processMessage(message);
                        if (result.includes('successfully')) {
                            successCount++;
                        } else {
                            failureCount++;
                        }
                    } catch (error) {
                        this.logger.error(`Error processing message ${message.id}: ${error.message}`);
                        failureCount++;
                    }
                    processedCount++;
                }

                this.logger.log(`Processed ${processedCount} messages so far`);
                skip += this.BATCH_SIZE;
            }

            return `Categorization complete. Total processed: ${processedCount}, Successfully processed: ${successCount}, Failed: ${failureCount}`;
        } catch (error) {
            this.logger.error(`Error in batch categorization: ${error.message}`);
            throw error;
        }
    }
}