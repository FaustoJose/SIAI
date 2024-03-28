import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";
import { PreguntasFrecuenteService } from "./PreguntasFrecuentes.service";
import { PreguntasFrecuentes } from "@prisma/client";

@Controller('Preguntas')
export class PreguntasFrecuenteController {
    
    constructor(private readonly PreguntasFrecuenteService:PreguntasFrecuenteService){}

    @Get()
    async getAllPreguntasFrecuente(){
        return this.PreguntasFrecuenteService.getAllPreguntasFrecuentes()
    }

    @Post()
    async createPreguntasFrecuente(@Body() data: PreguntasFrecuentes){
        return this.PreguntasFrecuenteService.createPreguntasFrecuente(data)
    }

    @Get(':id')
    async getPreguntasFrecuenteById(@Param('id') id: string ){
        const PreguntasFrecuenteFound = await this.PreguntasFrecuenteService.getPreguntasFrecuenteById(Number(id))
        if (!PreguntasFrecuenteFound) throw new NotFoundException('Esta pregunta no existe.')
        return PreguntasFrecuenteFound
    }

    @Delete(':id')
    async deletePreguntasFrecuente(@Param('id') id: string){
        try{
            return await this.PreguntasFrecuenteService.deletePreguntasFrecuente(Number(id))
        }
        catch(error){
            throw new NotFoundException("Esta pregunta no existe.")
        }
        
    }

    @Put(':id')
    async updatePreguntasFrecuente(@Param('id')id: string,@Body() data: PreguntasFrecuentes){
        try{
            return await this.PreguntasFrecuenteService.updatePreguntasFrecuente(Number(id), data)
        }
        catch(error){
            throw new NotFoundException("Esta pregunta no existe.")
        }
        
    }
}