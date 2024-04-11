import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {RegistroEventos} from "@prisma/client"

@Injectable()
export class RegistroEventoService {

    constructor(private prisma: PrismaService){}

    getAllRegistroEventos():Promise<RegistroEventos[]>{
        return this.prisma.registroEventos.findMany()
    }

    getRegistroEventoById(event_id: number):Promise<RegistroEventos>{
        return this.prisma.registroEventos.findUnique({
            where:{
                event_id
            }
        })
    }

    createRegistroEvento(data: RegistroEventos):Promise<RegistroEventos>{
        const {event_name,event_location,event_date}=data;
        return this.prisma.registroEventos.create({
            data:{event_name,event_location,event_date}
        })
    }

    updateRegistroEvento(event_id:number,data: RegistroEventos):Promise<RegistroEventos>{
        return this.prisma.registroEventos.update({
            where:{
                event_id
            },
            data
        })
    }

    deleteRegistroEvento(event_id:number):Promise<RegistroEventos>{
        return this.prisma.registroEventos.delete({
            where:{
                event_id
            }
        })
    }
}