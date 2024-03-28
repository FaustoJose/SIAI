import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";
import { RegistroEventoService } from "./RegistroEventos.service";
import { RegistroEventos } from "@prisma/client";

@Controller('RegistroEventos')
export class RegistroEventoController {
    
    constructor(private readonly RegistroEventoService:RegistroEventoService){}

    @Get()
    async getAllRegistroEvento(){
        return this.RegistroEventoService.getAllRegistroEventos()
    }

    @Post()
    async createRegistroEvento(@Body() data: RegistroEventos){
        return this.RegistroEventoService.createRegistroEvento(data)
    }

    @Get(':id')
    async getRegistroEventoById(@Param('id') id: string ){
        const RegistroEventosFound = await this.RegistroEventoService.getRegistroEventoById(Number(id))
        if (!RegistroEventosFound) throw new NotFoundException('Este evento no existe.')
        return RegistroEventosFound
    }

    @Delete(':id')
    async deleteRegistroEvento(@Param('id') id: string){
        try{
            return await this.RegistroEventoService.deleteRegistroEvento(Number(id))
        }
        catch(error){
            throw new NotFoundException("Este evento no existe.")
        }
        
    }

    @Put(':id')
    async updateRegistroEvento(@Param('id')id: string,@Body() data: RegistroEventos){
        try{
            return await this.RegistroEventoService.updateRegistroEvento(Number(id), data)
        }
        catch(error){
            throw new NotFoundException("Este evento no existe.")
        }
        
    }
}