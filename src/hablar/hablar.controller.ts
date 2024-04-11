import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";
import { hablarService } from "./hablar.service";
//import { Listados } from "@prisma/client";


import { HfInference } from "@huggingface/inference";
import { readFileSync } from "fs";
import {config} from 'dotenv';

config()
@Controller()
export class hablarController {

    constructor(private readonly hablarService:hablarService){}


    @Get('hablar')
    async Decir(): Promise<any> {

      const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

      const model='Salesforce/blip-image-captioning-large'
      const ImageURL ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGG960cWMuzOo3s5alk2hCJKgshDJETbLSlw&s"

      const response =await fetch(ImageURL)
      const blob = await response.blob()
      const result = await hf.imageToText({
      data: blob,
      model: model
      
      }) 
       
      console.log(result)

      return result;
    }
    
    @Get('decir')
    async TxSp(@Param('text') text:string): Promise<any> {

      const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

      const model='espnet/kan-bayashi_ljspeech_vits'
      //const ImageURL ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGG960cWMuzOo3s5alk2hCJKgshDJETbLSlw&s"

      //const response =await fetch(ImageURL)
      //const blob = await text.blob()
      const result = await hf.textToSpeech({
        model: 'espnet/kan-bayashi_ljspeech_vits',
        inputs: 'Hello world!'
      })
      
      console.log(result)

      return result;
    }
}