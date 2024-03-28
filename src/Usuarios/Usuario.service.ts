import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {Usuarios} from "@prisma/client"

@Injectable()
export class UsuarioService {

    constructor(private prisma: PrismaService){}

    getAllUsuarios():Promise<Usuarios[]>{
        return this.prisma.usuarios.findMany()
    }

    getUsuarioById(user_id: number):Promise<Usuarios>{
        return this.prisma.usuarios.findUnique({
            where:{
                user_id
            }
        })
    }

    createUsuario(data: Usuarios):Promise<Usuarios>{
        return this.prisma.usuarios.create({
            data
        })
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