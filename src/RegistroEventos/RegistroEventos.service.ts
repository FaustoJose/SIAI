import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {RegistroEventos} from "@prisma/client"

@Injectable()
export class RegistroEventoService {

    constructor(private prisma: PrismaService){}

    getAllRegistroEventos():Promise<RegistroEventos[]>{
        try{

           return this.prisma.registroEventos.findMany();

        } catch (error) {
            console.error('Error geting registro eventos:', error);
            throw new Error('Error geting registro eventos');
        }
    }

    getRegistroEventoById(event_id: number):Promise<RegistroEventos>{
        return this.prisma.registroEventos.findUnique({
            where:{
                event_id
            }
        });
    }

    createRegistroEvento(data: RegistroEventos):Promise<RegistroEventos>{
        const {event_name,event_location,event_date} = data;
        try{

            return this.prisma.registroEventos.create({
                data:{event_name,event_location,event_date}
            });

        } catch (error) {
            console.error('Error creating registro evento:', error);
            throw new Error('Error creating registro evento');
        }
    }

    updateRegistroEvento(event_id:number,data: RegistroEventos):Promise<RegistroEventos>{
        return this.prisma.registroEventos.update({
            where:{
                event_id
            },
            data
        });
    }

    deleteRegistroEvento(event_id:number):Promise<RegistroEventos>{
        return this.prisma.registroEventos.delete({
            where:{
                event_id
            }
        });
    }
}