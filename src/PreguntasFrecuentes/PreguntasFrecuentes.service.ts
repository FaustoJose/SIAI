import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {PreguntasFrecuentes} from "@prisma/client"

@Injectable()
export class PreguntasFrecuenteService {

    constructor(private prisma: PrismaService){}

    getAllPreguntasFrecuentes():Promise<PreguntasFrecuentes[]>{
        return this.prisma.preguntasFrecuentes.findMany()
    }

    getPreguntasFrecuenteById(faq_id: number):Promise<PreguntasFrecuentes>{
        return this.prisma.preguntasFrecuentes.findUnique({
            where:{
                faq_id
            }
        })
    }

    createPreguntasFrecuente(data: PreguntasFrecuentes):Promise<PreguntasFrecuentes>{
        const {category_id,answer,question}=data
        return this.prisma.preguntasFrecuentes.create({
            data:{category_id,answer,question}
        })
    }

    updatePreguntasFrecuente(faq_id:number,data: PreguntasFrecuentes):Promise<PreguntasFrecuentes>{
        return this.prisma.preguntasFrecuentes.update({
            where:{
                faq_id
            },
            data
        })
    }

    deletePreguntasFrecuente(faq_id:number):Promise<PreguntasFrecuentes>{
        return this.prisma.preguntasFrecuentes.delete({
            where:{
                faq_id
            }
        })
    }
}