import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";
import { ProfesionService } from "./Profesion.service";
import { Profesion } from "@prisma/client";

@Controller('Profesion')
export class ProfesionController {
    
    constructor(private readonly ProfesionService:ProfesionService){}

    @Get()
    async getAllProfesion(){
        return this.ProfesionService.getAllProfesion()
    }

    @Post()
    async createProfesion(@Body() data: Profesion){
        return this.ProfesionService.createProfesion(data)
    }

    @Get(':id')
    async getProfesionById(@Param('id') id: string ){
        const ProfesionFound = await this.ProfesionService.getProfesionById(Number(id))
        if (!ProfesionFound) throw new NotFoundException('Este participante no existe.')
        return ProfesionFound
    }

    @Delete(':id')
    async deleteProfesion(@Param('id') id: string){
        try{
            return await this.ProfesionService.deleteProfesion(Number(id))
        }
        catch(error){
            throw new NotFoundException("Esta Profesion no existe.")
        }
        
    }

    @Put(':id')
    async updateProfesion(@Param('id')id: string,@Body() data: Profesion){
        try{
            return await this.ProfesionService.updateProfesion(Number(id), data)
        }
        catch(error){
            throw new NotFoundException("Esta Profesion no existe.")
        }
        
    }
}