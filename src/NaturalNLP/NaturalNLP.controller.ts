import { Controller,Post, Body } from "@nestjs/common";
import { NaturalNLPService } from "./NaturalNLP.service";
//import { NlpManager } from 'node-nlp-typescript';

@Controller()
export class NaturalNLPController {

    constructor(private readonly NaturalNLPService: NaturalNLPService){}

    @Post('NaturalNLP')
    async Similitud(@Body('text') text: string): Promise<any> {
        try {
           
            // Obtener todas las preguntas desde el servicio NaturalNLPService
            const questions = (await this.NaturalNLPService.getAllPreguntas());
            console.log('datos de quetions',questions)


    
            // Simular la búsqueda de preguntas similares al texto proporcionado
            const similarQuestions = questions.filter((question) => {
            const ques = question.question;
            
             const palabrasUnicas = this.NaturalNLPService.calcularSimilitud(text);
             const valoresArray = [...palabrasUnicas];
             const textoCompletoNormalizado = ques.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
             const resul=textoCompletoNormalizado.includes(valoresArray[0]+' '+valoresArray[1] +' '+valoresArray[2])
             console.log("Palabras result:", resul);
             console.log("Palabras únicas:", valoresArray[0]+' '+valoresArray[1] +' '+valoresArray[2]);
           
               if (textoCompletoNormalizado.includes(valoresArray[2])) {

                    console.log('datos de pregunta',textoCompletoNormalizado);
                    return textoCompletoNormalizado;
                
               }
             
           }
              

             

               
           );

           return similarQuestions;
        } catch (error) {
            console.error('Error al obtener las preguntas:', error);
            throw error;
        }
    }
}
