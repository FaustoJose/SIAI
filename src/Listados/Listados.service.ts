import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {Listados} from "@prisma/client"

@Injectable()
export class ListadoService {

    constructor(private prisma: PrismaService){}

    getAllListados():Promise<Listados[]>{
        return this.prisma.listados.findMany()
    }

    getListadoById(list_id: number):Promise<Listados>{
        return this.prisma.listados.findUnique({
            where:{
                list_id
            }
        })
    }

    createListado(data: Listados):Promise<Listados>{
        return this.prisma.listados.create({
            data
        })
    }

    updateListado(list_id:number,data: Listados):Promise<Listados>{
        return this.prisma.listados.update({
            where:{
                list_id
            },
            data
        })
    }

    deleteListado(list_id:number):Promise<Listados>{
        return this.prisma.listados.delete({
            where:{
                list_id
            }
        })
    }
}