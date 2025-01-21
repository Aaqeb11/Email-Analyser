import { Logger, Module } from "@nestjs/common";
import { CategorizationController } from "./categorization.controller";
import { CategorizationService } from "./categorization.service";
import { PrismaService } from "src/prisma.service";

@Module({
    imports:[],
    controllers:[CategorizationController],
    providers:[CategorizationService,PrismaService]

})
export class CategorizationModule{}
