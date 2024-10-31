import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AudioService } from './hablar.service';
import * as path from 'path';
@Controller('hablar')
export class AudioController {
  constructor(private readonly audioService: AudioService) {}

  @Get()
  getAudio(@Res() res: Response) {
    const filePath = this.audioService.getAudioFilePath();
    const resolvedPath = path.resolve(filePath);
    res.sendFile(resolvedPath);
  }
}
