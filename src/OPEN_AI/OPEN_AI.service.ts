import { Injectable } from "@nestjs/common";
import OpenAI from 'openai';
//import { ChatCompletionMessageParam } from "openai/resources";
import {config} from 'dotenv';
import * as fs from 'fs';
config()


@Injectable()
export class ChatService {
    private openai: OpenAI;
    private conversationHistory:{
        name: string,
        role: 'function'|'user'|'system'|'assistant';
        content: string;
    }[]=[]
   constructor(){
    this.openai = new OpenAI({
        apiKey: process.env.API_KEY_OPEN_AI,
    });
   }

   async open_ai(content: string) {

       try{ 

            this.conversationHistory.push({
                name: 'user',
                role:'user',
                content:content,
            });

            // Obtener la respuesta del modelo de lenguaje
        const chatCompletition = await this.openai.chat.completions.create({
            messages: [
                { role: "system", content: "you are a helpful assistant" },
                ...this.conversationHistory,
            ],
            model: "gpt-4-turbo", // Usa un modelo que sea compatible con la API de TTS
        });

        // Agregar la respuesta del modelo al historial de la conversación
        this.conversationHistory.push({
            name: 'assistant',
            role: 'assistant',
            content: chatCompletition.choices[0].message.content,
        });

    

        return chatCompletition.choices[0].message.content;
        
    } catch (error) {
        console.error('Error generating speech:', error);
        throw new Error('Error generating speech');
    }
           
    }

}