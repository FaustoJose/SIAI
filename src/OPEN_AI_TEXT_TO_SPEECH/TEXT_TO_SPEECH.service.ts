import { Injectable } from '@nestjs/common';
//import axios from 'axios';
import * as fs from 'fs';
//import * as path from 'path';
import * as dotenv from 'dotenv';
import  OpenAI from 'openai'
import { toNamespacedPath } from 'path/posix';

dotenv.config(); 

@Injectable()
export class OpenAIService {
  private readonly apiKey: string;
  private readonly apiUrl: string;

  constructor() {
    this.apiKey = process.env.API_KEY_OPEN_AI;
    }

  async textToSpeech(text: string, outputFilePath: string): Promise<void> {
    
    
    try {
       const apiKey = process.env.API_KEY_OPEN_AI; 
    
    const openai = new OpenAI({apiKey});
        const mp3 = await openai.audio.speech.create({
            model:"tts-1-hd",
            voice:"onyx",
            input:`"${text}"`,
            //speed:0.8,
        });
 
        const buffer = Buffer.from(await mp3.arrayBuffer());
        await fs.promises.writeFile(outputFilePath, buffer);
    } catch (error) {
      console.error('Error generating speech:', error);
      throw new Error('Error generating speech');
    }
  }
}
