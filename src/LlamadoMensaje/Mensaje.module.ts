import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { MensajeService } from "./Mensaje.service";
import { MensajeController } from "./Mensaje.controller";

@Module({
    controllers:[MensajeController],
    providers:[MensajeService],
    imports:[PrismaModule]
})
export class MensajeModule{}