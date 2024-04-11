import { Controller, Get, Param } from "@nestjs/common";
import { NaturalNLPService } from "./NaturalNLP.service";
//import { NlpManager } from 'node-nlp-typescript';

@Controller()
export class NaturalNLPController {

    constructor(private readonly NaturalNLPService: NaturalNLPService){}

    @Get('NaturalNLP/:text')
    async Similitud(@Param('text') text: string): Promise<any> {
        try {
           // Obtener todas las preguntas desde el servicio NaturalNLPService
           const questions = (await this.NaturalNLPService.getAllPreguntas());
           console.log('datos de quetions',questions)
           // Simular la búsqueda de preguntas similares al texto proporcionado
           const similarQuestions = questions.filter(question =>
               this.NaturalNLPService.calcularSimilitud(text, question.question) > 0.7

               
           );

           return similarQuestions;
        } catch (error) {
            console.error('Error al obtener las preguntas:', error);
            throw error;
        }
    }
}
