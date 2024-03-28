import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { PreguntasFrecuenteService } from "./PreguntasFrecuentes.service";
import { PreguntasFrecuenteController } from "./PreguntasFrecuentes.controller";

@Module({
    controllers:[PreguntasFrecuenteController],
    providers:[PreguntasFrecuenteService],
    imports:[PrismaModule]
})
export class PreguntasFrecuenteModule{}