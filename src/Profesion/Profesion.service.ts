import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {Profesion} from "@prisma/client"

@Injectable()
export class ProfesionService {

    constructor(private prisma: PrismaService){}

    getAllProfesion():Promise<Profesion[]>{
        try{

          return this.prisma.profesion.findMany();

        } catch (error) {
            console.error('Error geting profesion:', error);
            throw new Error('Error geting profesion');
        }
    }

    getProfesionById(profetion_id: number):Promise<Profesion>{
        return this.prisma.profesion.findUnique({
            where:{
                profetion_id
            }
        });
    }

    createProfesion(data: Profesion):Promise<Profesion>{
        const {description} = data;
        try{

            return this.prisma.profesion.create({
                data:{description}
            });

        } catch (error) {
            console.error('Error creating profesion:', error);
            throw new Error('Error creating profesion');
        }
    }

    updateProfesion(profetion_id:number,data: Profesion):Promise<Profesion>{
        return this.prisma.profesion.update({
            where:{
                profetion_id
            },
            data
        });
    }

    deleteProfesion(profetion_id:number):Promise<Profesion>{
        return this.prisma.profesion.delete({
            where:{
                profetion_id
            }
        });
    }
}