import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { RegistroEventoService } from "./RegistroEventos.service";
import { RegistroEventoController } from "./RegistroEventos.controller";

@Module({
    controllers:[RegistroEventoController],
    providers:[RegistroEventoService],
    imports:[PrismaModule]
})
export class RegistroEventoModule{}