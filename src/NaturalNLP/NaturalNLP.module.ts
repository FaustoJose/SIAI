import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { NaturalNLPService } from "./NaturalNLP.service";
import { NaturalNLPController } from "./NaturalNLP.controller";

@Module({
    controllers:[NaturalNLPController],
    providers:[NaturalNLPService],
    imports:[PrismaModule]
})
export class NaturalNLPModule{}