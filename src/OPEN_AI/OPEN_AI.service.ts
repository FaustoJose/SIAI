import { Injectable } from "@nestjs/common";
import OpenAI from 'openai';
//import { ChatCompletionMessageParam } from "openai/resources";
import {config} from 'dotenv';

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
        
        this.conversationHistory.push({
            name: 'user',
            role:'user',
            content:content,
        });

        const chatCompletition = await this.openai.chat.completions.create({
            messages:[
                {role:"system", content:" you are a helful assistant"},
                ...this.conversationHistory,
            ],
            model:"gpt-3.5-turbo",
        });
        this.conversationHistory.push({
            name:'user',
            role:'assistant',
            content: chatCompletition.choices[0].message.content,
        });


        return chatCompletition.choices[0].message.content;
    }

}