import { Controller, Post, Body,HttpException, HttpStatus } from '@nestjs/common';
import { AIService } from './AI.service';

@Controller()
export class AIController {
  constructor(private readonly openAIService: AIService) {}

  @Post('AItextToSpeech')
  async generateSpeech(@Body('text') text: string): Promise<string> {
    const outputFilePath = 'audio/output01.mp3';
    try {
      await this.openAIService.textToSpeech(text, outputFilePath);
      return `Audio file saved at ${outputFilePath}`;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    } 
  } 
  @Post('AItextToSpeech02')
  async generateSpeech02(@Body('text') text: string): Promise<string> {
    const outputFilePath = 'audio/output01.wav';
    try {
      await this.openAIService.textToSpeech02(text, outputFilePath);
      return `Audio file saved at ${outputFilePath}`;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    } 
  } 
} 
