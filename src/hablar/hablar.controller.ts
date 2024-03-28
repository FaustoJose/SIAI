import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";
import { hablarService } from "./hablar.service";
//import { Listados } from "@prisma/client";

@Controller('hablar')
export class hablarController {

    constructor(private readonly hablarService:hablarService){}


    @Get(':text')
    async Decir(@Param('text') text: string): Promise<string> {
      this.hablarService.Decir(text);
      return 'Speech initiated for: ' + text;
    }

}