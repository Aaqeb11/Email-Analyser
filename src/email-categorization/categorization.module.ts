import { Logger, Module } from "@nestjs/common";
import { CategorizationController } from "./categorization.controller";
import { CategorizationService } from "./categorization.service";
import { PrismaService } from "src/prisma.service";
import { CompanyClassificationService } from "./classificatoin.service";

@Module({
    imports:[],
    controllers:[CategorizationController],
    providers:[CategorizationService,PrismaService,CompanyClassificationService]

})
export class CategorizationModule{}
