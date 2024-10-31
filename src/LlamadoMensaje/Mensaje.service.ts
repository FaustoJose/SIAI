import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {LlamadoMensaje} from "@prisma/client"

@Injectable()
export class MensajeService {

    constructor(private prisma: PrismaService){}

    getAllMensaje():Promise<LlamadoMensaje[]>{
        try{
          return this.prisma.llamadoMensaje.findMany();
        } catch (error) {
            console.error('Error geting mensaje:', error);
            throw new Error('Error geting mensaje');
        }
    }

    getMensajeById(Id: number):Promise<LlamadoMensaje>{
        return this.prisma.llamadoMensaje.findUnique({
            where:{
                Id
            }
        })
    }

    createMensaje(data: LlamadoMensaje):Promise<LlamadoMensaje>{
        const {event_id,Titulo,Text,TipoDiscurso} = data;
        try{

            return this.prisma.llamadoMensaje.create({
                data:{event_id,Titulo,Text,TipoDiscurso}
            });

        } catch (error) {
            console.error('Error creatting mesaje:', error);
            throw new Error('Error creatting mensaje');
        }
    }

    updateMensaje(Id:number,data: LlamadoMensaje):Promise<LlamadoMensaje>{
        return this.prisma.llamadoMensaje.update({
            where:{
                Id
            },
            data
        })
    }

    deleteMensaje(Id:number):Promise<LlamadoMensaje>{
        return this.prisma.llamadoMensaje.delete({
            where:{
                Id
            }
        })
    }
}