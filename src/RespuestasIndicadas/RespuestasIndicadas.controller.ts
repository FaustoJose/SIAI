import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";
import { RespuestasIndicadaService } from "./RespuestasIndicadas.service";
import { RespuestasIndicadas } from "@prisma/client";

@Controller('Respuestas')
export class RespuestasIndicadaController {
    
    constructor(private readonly RespuestasIndicadaService:RespuestasIndicadaService){}

    @Get()
    async getAllRespuestasIndicadas(){
        return this.RespuestasIndicadaService.getAllRespuestasIndicadas()
    }

    @Post()
    async createRespuestasIndicada(@Body() data: RespuestasIndicadas){
        return this.RespuestasIndicadaService.createRespuestasIndicadas(data)
    }

    @Get(':id')
    async getRespuestasIndicadaById(@Param('id') id: string ){
        const RespuestasIndicadasFound = await this.RespuestasIndicadaService.getRespuestasIndicadasById(Number(id))
        if (!RespuestasIndicadasFound) throw new NotFoundException('Esta respuesta no existe.')
        return RespuestasIndicadasFound
    }

    @Delete(':id')
    async deleteRespuestasIndicadas(@Param('id') id: string){
        try{
            return await this.RespuestasIndicadaService.deleteRespuestasIndicadas(Number(id))
        }
        catch(error){
            throw new NotFoundException("Esta respuesta no existe.")
        }
        
    }

    @Put(':id')
    async updateRespuestasIndicadas(@Param('id')id: string,@Body() data: RespuestasIndicadas){
        try{
            return await this.RespuestasIndicadaService.updateRespuestasIndicadas(Number(id), data)
        }
        catch(error){
            throw new NotFoundException("Esta respuesta no existe.")
        }
        
    }
}