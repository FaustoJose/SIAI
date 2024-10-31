import { Module } from "@nestjs/common";
//import { PrismaModule } from "src/prisma/prisma.module";
import { AudioService } from "./hablar.service";
import { AudioController } from "./hablar.controller";

@Module({
    controllers:[AudioController],
    providers:[AudioService],
    //imports:[PrismaModule]
})
export class hablarModule{}