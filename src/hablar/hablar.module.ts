import { Module } from "@nestjs/common";
//import { PrismaModule } from "src/prisma/prisma.module";
import { hablarService } from "./hablar.service";
import { hablarController } from "./hablar.controller";

@Module({
    controllers:[hablarController],
    providers:[hablarService],
    //imports:[PrismaModule]
})
export class hablarModule{}