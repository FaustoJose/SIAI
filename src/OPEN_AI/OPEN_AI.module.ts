import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import {ChatService} from "./OPEN_AI.service"
import { ChatController} from "./OPEN_AI.controller";

@Module({
    controllers:[ChatController],
    providers:[ChatService],
    imports:[PrismaModule]
})
export class ChatModule{}