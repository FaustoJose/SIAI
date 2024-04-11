import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProfesionService } from "./Profesion.service";
import { ProfesionController } from "./Profesion.controller";

@Module({
    controllers:[ProfesionController],
    providers:[ProfesionService],
    imports:[PrismaModule]
})
export class ProfesionModule{}