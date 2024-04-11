import { Controller, Post, Body} from "@nestjs/common";
import { ChatService } from "./OPEN_AI.service";


@Controller('chatGPT')
export class ChatController {

    constructor(private readonly ChatService:ChatService) {}
        


    @Post('talk')
    async chatGPT(@Body('content') content: string): Promise<any> {
       return this.ChatService.open_ai(content);
    }
}
