import { Controller, Get } from "@nestjs/common";

@Controller()
export class CategorizationController {
    @Get('health')
    getHealth():string{
        return 'service healthy.'
    }
}