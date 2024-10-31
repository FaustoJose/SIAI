import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";



@Injectable()
export class NaturalNLPService {

constructor(private prisma: PrismaService){}

   async getAllPreguntas():Promise <any[]> {
        try {
            const preguntas = await this.prisma.preguntasFrecuentes.findMany({
                select: {
                    question: true
                }
            });
            return preguntas;
        } catch (error) {
            console.error('Error al obtener las preguntas frecuentes:', error);
            throw new error;
        } 
    }

    calcularSimilitud(texto: string): Set<string> {
        texto = texto.toLowerCase().trim();
        const palabras = texto.split(' '); // Dividir el texto en palabras
        
        return new Set(palabras);
    }
    

    
   
    private union(set1: Set<string>): Set<string> {
        const result = new Set<string>();
        for (const elem of set1) {
            result.add(elem);
        }
        return result;
    }

     
   
}


