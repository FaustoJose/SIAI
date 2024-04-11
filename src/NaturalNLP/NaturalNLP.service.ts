import { Injectable } from "@nestjs/common";
//import { Response } from "@nestjs/common";
//import { TextToSpeechClient } from '@google-cloud/text-to-speech';
//import * as say from 'say';
//import { exec } from 'child_process';
import { PrismaService } from "src/prisma/prisma.service";
//import {PreguntasFrecuentes} from "@prisma/client"


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
            throw error;
        } 
    }

    calcularSimilitud(texto1: string, texto2: string): number {
        texto1 = texto1.toLowerCase().replace(/[^\w\s]/g, '').trim();
        texto2 = texto2.toLowerCase().replace(/[^\w\s]/g, '').trim();
        console.log('data texto2',texto2)
        // Convertir los textos en conjuntos de palabras únicas
        const set1 = new Set(texto1.split(' '));
        const set2 = new Set(texto2.split(' '));
        console.log('data set2',set2)
        // Calcular la intersección y la unión de los conjuntos
        const intersection = this.intersection(set1, set2);
        const union = this.union(set1, set2);
        console.log('data intersection',intersection)
        console.log('data union',union)
        // Calcular el coeficiente de Jaccard
        const jaccardCoefficient = intersection.size / union.size;
        console.log('data jaccardCoefficient',jaccardCoefficient)
        return jaccardCoefficient;
    }

    // Método auxiliar para calcular la intersección de dos conjuntos
    private intersection(set1: Set<string>, set2: Set<string>): Set<string> {
        const result = new Set<string>();
        for (const elem of set1) {
            if (set2.has(elem)) {
                result.add(elem);
            }
        }
        return result;
    }

    // Método auxiliar para calcular la unión de dos conjuntos
    private union(set1: Set<string>, set2: Set<string>): Set<string> {
        const result = new Set<string>(set1);
        for (const elem of set2) {
            result.add(elem);
        }
        return result;
    }

     
   
}


