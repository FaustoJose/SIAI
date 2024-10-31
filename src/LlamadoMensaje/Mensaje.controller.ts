import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";
import { MensajeService } from "./Mensaje.service";
import { LlamadoMensaje } from "@prisma/client";

@Controller('Mensaje')
export class MensajeController {
    
    constructor(private readonly MensajeService:MensajeService){}

    @Get()
    async getAllMensaje(){
        return this.MensajeService.getAllMensaje()
    }

    @Post()
    async createMensaje(@Body() data: LlamadoMensaje){
        return this.MensajeService.createMensaje(data)
    }

    @Get(':id')
    async getMensajeById(@Param('id') id: string ){
        const MensajeFound = await this.MensajeService.getMensajeById(Number(id))
        if (!MensajeFound) throw new NotFoundException('Este Mensaje no existe.')
        return MensajeFound
    }

    @Delete(':id')
    async deleteMensaje(@Param('id') id: string){
        try{
            return await this.MensajeService.deleteMensaje(Number(id))
        }
        catch(error){
            throw new NotFoundException("Esta Mensaje no existe.")
        }
         
    }

    @Put(':id')
    async updateMensaje(@Param('id')id: string,@Body() data: LlamadoMensaje){
        try{
            return await this.MensajeService.updateMensaje(Number(id), data)
        }
        catch(error){
            throw new NotFoundException("Esta Mensaje no existe.")
        }
        
    }
}