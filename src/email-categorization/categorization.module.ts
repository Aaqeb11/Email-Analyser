import { Module } from "@nestjs/common";
import { CategorizationController } from "./categorization.controller";
import { CategorizationService } from "./categorization.service";

@Module({
    imports:[],
    controllers:[CategorizationController],
    providers:[CategorizationService]

})
export class CategorizationModule{}
