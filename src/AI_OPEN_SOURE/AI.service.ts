import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import { HfInference } from '@huggingface/inference';
//...................................................
//import {pipeline} from '@xenova/transformers';
//import * as wavefile from 'wavefile'

dotenv.config(); 

@Injectable()
export class AIService {

     constructor(){

     }
  async textToSpeech(text: string, outputFilePath: string): Promise<void> {
    
    
    try {
       const apiKey = process.env.HF_ACCESS_TOKEN; 
   
        const hf = new HfInference(`${apiKey}`);
            const mp3 = await hf.textToSpeech({
                model:"google/tts-transformer-en-es",
                //lenguage:"es",
                inputs:`${text}`,
              // speed:0.8, 
            });
 
        const buffer = Buffer.from(await mp3.arrayBuffer());
        await fs.promises.writeFile(outputFilePath, buffer);
    } catch (error) {
      console.error('Error generating speech:', error);
      throw new Error('Error generating speech');
    }
  }

  async textToSpeech02(text: string, outputFilePath: string): Promise<void> {
    const EMBED = 'https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/speaker_embeddings.bin'
    
    try {
          
      const { pipeline } = await import('@xenova/transformers');
      const wavefile = (await import('wavefile')).default;

       const synthesizer = await pipeline(
        'text-to-speech',
        'Xenova/speecht5_tts',
        { quantized: false}
       )
       
       const output =await synthesizer(
        text,
        {speaker_embeddings: EMBED}
       )
        
 
        const wav = new wavefile.WaveFile();
        wav.fromScratch(1, output.sampling_rate, '32f', output.audio);
        await fs.promises.writeFile(outputFilePath, wav.toBuffer());

    } catch (error) {
      console.error('Error generating speech:', error);
      throw new Error('Error generating speech');
    }
  }



}
