import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";
import { UsuarioService } from "./Usuario.service";
import { Usuarios } from "@prisma/client";

@Controller('Usuario')
export class UsuarioController {
    
    constructor(private readonly UsuarioService:UsuarioService){}

    @Get()
    async getAllUsuario(){
        return this.UsuarioService.getAllUsuarios()
    }

    @Post()
    async createUsuario(@Body() data: Usuarios){
        return this.UsuarioService.createUsuario(data)
    }

    @Get(':id')
    async getUsuarioById(@Param('id') id: string ){
        const UsuarioFound = await this.UsuarioService.getUsuarioById(Number(id))
        if (!UsuarioFound) throw new NotFoundException('Usuario no Existe.')
        return UsuarioFound
    }

    @Delete(':id')
    async deleteUsuario(@Param('id') id: string){
        try{
            return await this.UsuarioService.deleteUsuario(Number(id))
        }
        catch(error){
            throw new NotFoundException("Usuario no Existe.")
        }
       
    }

    @Put(':id')
    async updateUsuario(@Param('id')id: string, @Body() data: Usuarios){
        try{
            return await this.UsuarioService.updateUsuario(Number(id), data)
        }
        catch(error){
            throw new NotFoundException("Usuario no Existe.")
        }
        
    }
}