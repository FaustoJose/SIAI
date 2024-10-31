// src/d-id/d-id.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { DIdService } from './Did.service';

@Controller('d-id')
export class DIdController {
  constructor(private readonly dIdService: DIdService) {}

  @Post('animate')
  async animateImage(@Body('imageUrl') imageUrl: string): Promise<any> {
    return this.dIdService.animateImage(imageUrl);
  }
}
