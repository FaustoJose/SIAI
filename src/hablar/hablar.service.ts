import { Injectable } from '@nestjs/common';
import * as path from 'path';

@Injectable()
export class AudioService {
  getAudioFilePath(): string {
    try{
    // Especifica la ruta completa del archivo MP3
    const audioFilePath = path.join(process.cwd(), 'Audios', 'output.mp3');
    return audioFilePath;
  } catch (error) {
    console.error('Error generating speech:', error);
    //throw new Error('Error generating speech');
  }
  }
}
