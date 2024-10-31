import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ImgParticipanteService } from "./ImgParticipante.service";
import { ImgParticipanteController } from "./ImgParticipante.controller";

@Module({
    controllers:[ImgParticipanteController],
    providers:[ImgParticipanteService],
    imports:[PrismaModule]
})
export class ImgParticipanteModule{}