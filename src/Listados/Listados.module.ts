import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ListadoService } from "./Listados.service";
import { ListadosController } from "./Listados.controller";

@Module({
    controllers:[ListadosController],
    providers:[ListadoService],
    imports:[PrismaModule]
})
export class ListadoModule{}