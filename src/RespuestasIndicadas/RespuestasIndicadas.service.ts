import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {RespuestasIndicadas} from "@prisma/client"

@Injectable()
export class RespuestasIndicadaService {

    constructor(private prisma: PrismaService){}

    getAllRespuestasIndicadas():Promise<RespuestasIndicadas[]>{
        return this.prisma.respuestasIndicadas.findMany()
    }

    getRespuestasIndicadasById(indication_id: number):Promise<RespuestasIndicadas>{
        return this.prisma.respuestasIndicadas.findUnique({
            where:{
                indication_id
            }
        })
    }

    createRespuestasIndicadas(data: RespuestasIndicadas):Promise<RespuestasIndicadas>{
        return this.prisma.respuestasIndicadas.create({
            data
        })
    }

    updateRespuestasIndicadas(indication_id:number,data: RespuestasIndicadas):Promise<RespuestasIndicadas>{
        return this.prisma.respuestasIndicadas.update({
            where:{
                indication_id
            },
            data
        })
    }

    deleteRespuestasIndicadas(indication_id:number):Promise<RespuestasIndicadas>{
        return this.prisma.respuestasIndicadas.delete({
            where:{
                indication_id
            }
        })
    }
}