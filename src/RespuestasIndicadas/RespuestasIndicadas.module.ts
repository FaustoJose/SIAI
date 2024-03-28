import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { RespuestasIndicadaService } from "./RespuestasIndicadas.service";
import { RespuestasIndicadaController } from "./RespuestasIndicadas.controller";

@Module({
    controllers:[RespuestasIndicadaController],
    providers:[RespuestasIndicadaService],
    imports:[PrismaModule]
})
export class RespuestasIndicadaModule{}