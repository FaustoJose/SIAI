import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";
import { ListadoService } from "./Listados.service";
import { Listados } from "@prisma/client";

@Controller('Listados')
export class ListadosController {
    
    constructor(private readonly ListadoService:ListadoService){}

    @Get()
    async getAllListados(){
        return this.ListadoService.getAllListados()
    }

    @Post()
    async createListado(@Body() data: Listados){
        return this.ListadoService.createListado(data)
    }

    @Get(':id')
    async getListadoById(@Param('id') id: string ){
        const ListadosFound = await this.ListadoService.getListadoById(Number(id))
        if (!ListadosFound) throw new NotFoundException('Esta lista no existe.')
        return ListadosFound
    }

    @Delete(':id')
    async deleteListado(@Param('id') id: string){
        try{
            return await this.ListadoService.deleteListado(Number(id))
        }
        catch(error){
            throw new NotFoundException("Esta lista no existe.")
        }
        
    }

    @Put(':id')
    async updateListado(@Param('id')id: string,@Body() data: Listados){
        try{
            return await this.ListadoService.updateListado(Number(id), data)
        }
        catch(error){
            throw new NotFoundException("Esta lista no existe.")
        }
        
    }
}