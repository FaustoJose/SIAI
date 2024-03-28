import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ParticipantesEventoService } from "./ParticipantesEvento.service";
import { ParticipantesEventoController } from "./ParticipantesEvento.controller";

@Module({
    controllers:[ParticipantesEventoController],
    providers:[ParticipantesEventoService],
    imports:[PrismaModule]
})
export class ParticipantesEventoModule{}