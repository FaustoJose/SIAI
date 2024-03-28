import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { UsuarioService } from "./Usuario.service";
import { UsuarioController } from "./Usuario.controller";

@Module({
    controllers:[UsuarioController],
    providers:[UsuarioService],
    imports:[PrismaModule]
})
export class UsuarioModule{}