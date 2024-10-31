import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {PreguntasFrecuentes} from "@prisma/client"

@Injectable()
export class PreguntasFrecuenteService {

    constructor(private prisma: PrismaService){}

    getAllPreguntasFrecuentes():Promise<PreguntasFrecuentes[]>{
        try{

           return this.prisma.preguntasFrecuentes.findMany();

        } catch (error) {
            console.error('Error geting preguntas frecuentes:', error);
            throw new Error('Error getting preguntas frecuentes');
        }
    }

    getPreguntasFrecuenteById(faq_id: number):Promise<PreguntasFrecuentes>{
        return this.prisma.preguntasFrecuentes.findUnique({
            where:{
                faq_id
            }
        });
    }

    createPreguntasFrecuente(data: PreguntasFrecuentes):Promise<PreguntasFrecuentes>{
        const {category_id,answer,question}=data;
        try{

            return this.prisma.preguntasFrecuentes.create({
                data:{category_id,answer,question}
            });

        } catch (error) {
            console.error('Error creating preguntas frecuentes:', error);
            throw new Error('Error creating preguntas frecuentes');
        }
    }

    updatePreguntasFrecuente(faq_id:number,data: PreguntasFrecuentes):Promise<PreguntasFrecuentes>{
        return this.prisma.preguntasFrecuentes.update({
            where:{
                faq_id
            },
            data
        });
    }

    deletePreguntasFrecuente(faq_id:number):Promise<PreguntasFrecuentes>{
        return this.prisma.preguntasFrecuentes.delete({
            where:{
                faq_id
            }
        });
    }
}