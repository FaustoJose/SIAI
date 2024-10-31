import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {Usuarios} from "@prisma/client"

@Injectable()
export class UsuarioService {

    constructor(private prisma: PrismaService){}

    getAllUsuarios():Promise<Usuarios[]>{
        try{

           return this.prisma.usuarios.findMany();

        } catch (error) {
            console.error('Error geting usuarios:', error);
            throw new Error('Error geting usuarios');
        }
    }

    getUsuarioById(user_id: number):Promise<Usuarios>{
        return this.prisma.usuarios.findUnique({
            where:{
                user_id
            }
        });
    }

    createUsuario(data: Usuarios):Promise<Usuarios>{
        try{

            return this.prisma.usuarios.create({
                data
            });

        } catch (error) {
            console.error('Error creatting usuario:', error);
            throw new Error('Error creatting usuario');
        }
    }

    updateUsuario(user_id:number,data: Usuarios):Promise<Usuarios>{
        return this.prisma.usuarios.update({
            where:{
                user_id
            },
            data
        })
    }

    deleteUsuario(user_id:number):Promise<Usuarios>{
        return this.prisma.usuarios.delete({
            where:{
                user_id
            }
        })
    }
}