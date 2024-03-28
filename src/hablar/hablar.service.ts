import { Injectable } from "@nestjs/common";
//import { Response } from "@nestjs/common";
//import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import * as say from 'say';
//import { exec } from 'child_process';
//import { PrismaService } from "src/prisma/prisma.service";
//import {Listados} from "@prisma/client"

@Injectable()
export class hablarService {

    //constructor(private prisma: PrismaService){}
    // constructor() {
    //   const host = process.env.MARYTTS_HOST || 'http://localhost';
    //   const port = process.env.MARYTTS_PORT ? parseInt(process.env.MARYTTS_PORT) : 59125;
    //   this.marytts = new MaryTTS({ host, port });
    // }
    Decir(text: string): void {
        console.log(say);
        say.speak(text, 'Microsoft Helena Mobile',1, (err) => {
            if (err) {
              return console.error(err);
            }
            console.log('Texto hablado correctamente.');
          });
      }


      // Decir(text: string): void {
      //   const command = `espeak "${text}" --stdout -v es+f | aplay`;
      //   exec(command, (err, stdout, stderr) => {
      //     if (err) {
      //       console.error(err);
      //       return;
      //     }
      //     console.log('Texto hablado correctamente.');
      //   });
      // }
    // async Decir(text: string): Promise<Buffer> {
    //   // Crea un cliente de Text-to-Speech
    //   const client = new TextToSpeechClient();
  
    //   // Configura la solicitud
    //   const request = {
    //     input: { text: text },
    //     voice: { languageCode: 'es-ES', ssmlGender: 'FEMALE' }, // Configura el idioma y el género de la voz
    //     audioConfig: { audioEncoding: 'LINEAR16' }, // Configura el formato de salida de audio
    //   };
  
    //   // Realiza la solicitud a la API de Text-to-Speech
    //   const [response] = await client.synthesizeSpeech(request as any);

    //   // Devolver el audio en formato Buffer
    //   return (response as { audioContent: Buffer }).audioContent;
    //}
   
}