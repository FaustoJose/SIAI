import { Module } from '@nestjs/common';
import { OpenAIService } from './TEXT_TO_SPEECH.service';
import { TextToSpeechController } from './TEXT_TO_SPEECH.controller';

@Module({
  providers: [OpenAIService], 
  controllers: [TextToSpeechController],
})
export class OpenAIModule {}
