import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {ParticipantesEvento} from "@prisma/client"

@Injectable()
export class ParticipantesEventoService {

    constructor(private prisma: PrismaService){}

    getAllParticipantesEvento():Promise<ParticipantesEvento[]>{
        return this.prisma.participantesEvento.findMany()
    }

    getParticipantesEventoById(participant_id: number):Promise<ParticipantesEvento>{
        return this.prisma.participantesEvento.findUnique({
            where:{
                participant_id
            }
        })
    }

    getAllParticipantesEventoById(event_id: number):Promise<ParticipantesEvento[]>{
        return this.prisma.participantesEvento.findMany({
            where:{
                event_id
            }
        })
    }

    createParticipantesEvento(data: ParticipantesEvento):Promise<ParticipantesEvento>{
        const {profetion_id,event_id,participant_name} = data
        return this.prisma.participantesEvento.create({
            data:{profetion_id,event_id,participant_name}
        })
    }

    updateParticipantesEvento(participant_id:number,data: ParticipantesEvento):Promise<ParticipantesEvento>{
        return this.prisma.participantesEvento.update({
            where:{
                participant_id
            },
            data
        })
    }

    deleteParticipantesEvento(participant_id:number):Promise<ParticipantesEvento>{
        return this.prisma.participantesEvento.delete({
            where:{
                participant_id
            }
        })
    }
}