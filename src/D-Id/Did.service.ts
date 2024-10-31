// src/d-id/d-id.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
//import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import axios from 'axios';
dotenv.config(); 
@Injectable()
export class DIdService {
  //private readonly apiKey: string;

  constructor() {
    
  }

  async animateImage(imageUrl: string): Promise<any> {

    const apiKey = process.env.DID_API_KEY;

    const endpoint = 'https://api.d-id.com/animations';
// Usar la API de D-ID para animar la imagen

    const image = fs.readFileSync('./image/mujer.jpg', 'base64'); // Carga la imagen en base64
    const audio = fs.readFileSync('./audio/output.mp3', 'base64'); // Carga el audio en base64

    const headers = {
      Authorization: `Basic ${apiKey}`,
      'Content-Type': 'application/json',
    };

    const data = {
      "source_url": "data:image/jpeg;base64," + image,
      "audio": "data:audio/mp3;base64," + audio
    };

    try {
      const response = await axios.post(endpoint, data, { headers });
      return response.data;
    } catch (error) {
      console.error('Error animating image:', error);
      throw new Error('Error animating image');
    }
  }
}
