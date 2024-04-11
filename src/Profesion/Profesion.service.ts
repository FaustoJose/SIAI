import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {Profesion} from "@prisma/client"

@Injectable()
export class ProfesionService {

    constructor(private prisma: PrismaService){}

    getAllProfesion():Promise<Profesion[]>{
        return this.prisma.profesion.findMany()
    }

    getProfesionById(profetion_id: number):Promise<Profesion>{
        return this.prisma.profesion.findUnique({
            where:{
                profetion_id
            }
        })
    }

    createProfesion(data: Profesion):Promise<Profesion>{
        const {description} = data
        return this.prisma.profesion.create({
            data:{description}
        })
    }

    updateProfesion(profetion_id:number,data: Profesion):Promise<Profesion>{
        return this.prisma.profesion.update({
            where:{
                profetion_id
            },
            data
        })
    }

    deleteProfesion(profetion_id:number):Promise<Profesion>{
        return this.prisma.profesion.delete({
            where:{
                profetion_id
            }
        })
    }
}