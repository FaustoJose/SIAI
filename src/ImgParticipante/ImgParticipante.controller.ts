import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";

import { ImgParticipanteService } from "./ImgParticipante.service";
import { ImgParticipante } from "@prisma/client";

@Controller('ImgParticipante')
export class ImgParticipanteController {
    
    constructor(private readonly ImgParticipanteService:ImgParticipanteService){} 

    @Get()
    async getAllImgParticipante(){
        return this.ImgParticipanteService.getAllImgParticipante() 
    } 
    
    @Post()
    async createImgParticipante(@Body() data: ImgParticipante){
        return this.ImgParticipanteService.createImgParticipante(data)
    }

    @Get(':id')
    async getImgParticipanteById(@Param('id') id: string ){
        const ImgParticipanteFound = await this.ImgParticipanteService.getImgParticipanteById(Number(id))
        if (!ImgParticipanteFound) throw new NotFoundException('Esta Imagen no existe.')
        return ImgParticipanteFound
    }

    
    
    @Delete(':id')
    async deleteImgParticipante(@Param('id') id: string){
        try{
            return await this.ImgParticipanteService.deleteImgParticipante(Number(id))
        }
        catch(error){
            throw new NotFoundException("Esta Imagen no existe.")
        }
        
    }

    @Put(':id')
    async updateImgParticipante(@Param('id')id: string,@Body() data: ImgParticipante){
        try{
            return await this.ImgParticipanteService.updateImgParticipante(Number(id), data)
        }
        catch(error){
            throw new NotFoundException("Esta Imagen no existe.")
        } 
    }
}