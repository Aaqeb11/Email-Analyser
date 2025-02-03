// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
// import { PrismaClient as ReadOnlyPrismaClient } from '../prisma/generated/client-readonly';

@Injectable()
export class PrismaServicePrimary implements OnModuleInit, OnModuleDestroy {
  private readonly primaryClient: PrismaClient;
  //   private readonly readOnlyClient: ReadOnlyPrismaClient;
  $executeRaw: any;

  constructor() {
    this.primaryClient = new PrismaClient();
    // this.readOnlyClient = new ReadOnlyPrismaClient();
  }

  async onModuleInit() {
    // Connect to both databases
    await this.primaryClient.$connect();
    // await this.readOnlyClient.$connect();
  }

  async onModuleDestroy() {
    // Disconnect from both databases
    await this.primaryClient.$disconnect();
    // await this.readOnlyClient.$disconnect();
  }

  // Getter for primary database (CRUD operations)
  get primary() {
    return this.primaryClient;
  }

  // Getter for read-only database
  //   get readonly() {
  //     return this.readOnlyClient;
  //   }
}
