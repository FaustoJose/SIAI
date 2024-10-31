import { Module } from '@nestjs/common';
import { AIService } from './AI.service';
import { AIController } from './AI.controller';

@Module({
  providers: [AIService], 
  controllers: [AIController],
})
export class AIModule {}