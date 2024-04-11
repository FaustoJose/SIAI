import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { CategoryService } from "./Category.service";
import { CategoryController } from "./Category.controller";

@Module({
    controllers:[CategoryController],
    providers:[CategoryService],
    imports:[PrismaModule]
})
export class CategoryModule{}