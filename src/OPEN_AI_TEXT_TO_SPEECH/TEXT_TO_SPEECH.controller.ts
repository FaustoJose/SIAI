import { Controller, Post, Body,HttpException, HttpStatus } from '@nestjs/common';
import { OpenAIService } from './TEXT_TO_SPEECH.service';

@Controller('textToSpeech')
export class TextToSpeechController {
  constructor(private readonly openAIService: OpenAIService) {}

  @Post()
  async generateSpeech(@Body('text') text: string): Promise<string> {
    const outputFilePath = 'Audios/output.mp3';
    try {
      await this.openAIService.textToSpeech(text, outputFilePath);
      return `Audio file saved at ${outputFilePath}`;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    } 
  }  
} 
