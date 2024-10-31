// src/app.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from "src/prisma/prisma.module";
import { DIdService } from './Did.service';
import { DIdController } from './Did.controller';

@Module({
  imports: [PrismaModule],
  controllers: [DIdController],
  providers: [DIdService],
})
export class DidModule {}
