import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";
import { ParticipantesEventoService } from "./ParticipantesEvento.service";
import { ParticipantesEvento } from "@prisma/client";

@Controller('ParticipantesEvento')
export class ParticipantesEventoController {
    
    constructor(private readonly ParticipantesEventoService:ParticipantesEventoService){}

    @Get()
    async getAllParticipantesEvento(){
        return this.ParticipantesEventoService.getAllParticipantesEvento()
    }

    @Post()
    async createParticipantesEvento(@Body() data: ParticipantesEvento){
        return this.ParticipantesEventoService.createParticipantesEvento(data)
    }

    @Get(':id')
    async getParticipantesEventoById(@Param('id') id: string ){
        const ParticipantesEventoFound = await this.ParticipantesEventoService.getParticipantesEventoById(Number(id))
        if (!ParticipantesEventoFound) throw new NotFoundException('Este participante no existe.')
        return ParticipantesEventoFound
    }

    @Delete(':id')
    async deleteParticipantesEvento(@Param('id') id: string){
        try{
            return await this.ParticipantesEventoService.deleteParticipantesEvento(Number(id))
        }
        catch(error){
            throw new NotFoundException("Este participante no existe.")
        }
        
    }

    @Put(':id')
    async updateParticipantesEvento(@Param('id')id: string,@Body() data: ParticipantesEvento){
        try{
            return await this.ParticipantesEventoService.updateParticipantesEvento(Number(id), data)
        }
        catch(error){
            throw new NotFoundException("Este participante no existe.")
        }
        
    }
}