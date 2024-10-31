import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {ParticipantesEvento} from "@prisma/client"

@Injectable()
export class ParticipantesEventoService {

    constructor(private prisma: PrismaService){}

    getAllParticipantesEvento():Promise<ParticipantesEvento[]>{
        try{

           return this.prisma.participantesEvento.findMany();

        } catch (error) {
            console.error('Error geting participantes evento:', error);
            throw new Error('Error geting participantes eventos');
        }
    }

    getParticipantesEventoById(participant_id: number):Promise<ParticipantesEvento>{
        return this.prisma.participantesEvento.findUnique({
            where:{
                participant_id
            }
        });
    }

    getAllParticipantesEventoById(event_id: number):Promise<ParticipantesEvento[]>{
        return this.prisma.participantesEvento.findMany({
            where:{
                event_id
            }
        });
    }

    createParticipantesEvento(data: ParticipantesEvento):Promise<ParticipantesEvento>{
        const {profetion_id,event_id,participant_name,Img_id,academic_degree} = data;
        try{

            return this.prisma.participantesEvento.create({
                data:{profetion_id,event_id,participant_name,Img_id,academic_degree}
            });

        } catch (error) {
            console.error('Error creating participantes evento:', error);
            throw new Error('Error creating participantes evento');
        }
    }

    updateParticipantesEvento(participant_id:number,data: ParticipantesEvento):Promise<ParticipantesEvento>{
        return this.prisma.participantesEvento.update({
            where:{
                participant_id
            },
            data 
        });
    }

    deleteParticipantesEvento(participant_id:number):Promise<ParticipantesEvento>{
        return this.prisma.participantesEvento.delete({
            where:{
                participant_id
            }
        });
    }
}