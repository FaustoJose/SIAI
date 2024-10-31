import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {ImgParticipante} from "@prisma/client"

@Injectable()
export class ImgParticipanteService {

    constructor(private prisma: PrismaService){}

    getAllImgParticipante():Promise<ImgParticipante[]>{
        try{

        return this.prisma.imgParticipante.findMany();

        } catch (error) {
            console.error('Error generating speech:', error);
            throw new Error('Error generating speech');
        }
    }

    getImgParticipanteById(Img_id: number):Promise<ImgParticipante>{
        return this.prisma.imgParticipante.findUnique({
            where:{
                Img_id 
            }
        }) 
    }


    createImgParticipante(data: ImgParticipante):Promise<ImgParticipante>{
        const {Img_name,Img_type} = data;
        try{

            return this.prisma.imgParticipante.create({
                data:{Img_name,Img_type}
            });

        } catch (error) {
            console.error('Error generating speech:', error);
            throw new Error('Error generating speech');
        }
    }

    updateImgParticipante(Img_id:number,data: ImgParticipante):Promise<ImgParticipante>{
        return this.prisma.imgParticipante.update({
            where:{
                Img_id
            },
            data
        })
    }

    deleteImgParticipante(Img_id:number):Promise<ImgParticipante>{
        return this.prisma.imgParticipante.delete({
            where:{
                Img_id
            }
        })
    }
}