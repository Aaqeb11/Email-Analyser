import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'src/prisma.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategorizationModule } from './email-categorization/categorization.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [ 
    ConfigModule.forRoot({ isGlobal: true }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const host = configService.get<string>('REDIS_HOST')
        if (!host) {
          throw new Error('REDIS_HOST is not defined')
        }

        const port = configService.get<number>('REDIS_PORT')
        if (!port) {
          throw new Error('REDIS_PORT is not defined')
        }

        return {
          redis: {
            host,
            port,
          },
        }
      },
      inject: [ConfigService],
    }),
    CategorizationModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}