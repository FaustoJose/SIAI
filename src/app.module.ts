import { Module } from '@nestjs/common';
import { UsuarioModule } from './Usuarios/Usuario.module';
import { PreguntasFrecuenteModule } from './PreguntasFrecuentes/PreguntasFrecuentes.module';
import { RegistroEventoModule } from './RegistroEventos/RegistroEventos.module';
import { ParticipantesEventoModule } from './ParticipantesEvento/ParticipantesEvento.module';
import { hablarModule } from './hablar/hablar.module';
import { NaturalNLPModule } from './NaturalNLP/NaturalNLP.module';
import { ChatModule } from './OPEN_AI/OPEN_AI.module';
import { CategoryModule } from './Category/Category.module';
import { ProfesionModule } from './Profesion/Profesion.module';
import { ImgParticipanteModule } from './ImgParticipante/ImgParticipante.module';
import { UploadImgModule } from './UploadImg/UploadImg.module';
import { OpenAIModule } from './OPEN_AI_TEXT_TO_SPEECH/TEXT_TO_SPEECH.module';
import { AIModule } from './AI_OPEN_SOURE/AI.module';
import { DidModule } from './D-Id/Did.module';
import { MensajeModule } from './LlamadoMensaje/Mensaje.module';
//import { Wav2lipModule } from './wav2lip/wav2lip.module';
@Module({
  imports: [

      UsuarioModule,
      PreguntasFrecuenteModule,
      RegistroEventoModule,
      ParticipantesEventoModule,
      hablarModule,
      NaturalNLPModule,
      ChatModule,
      CategoryModule,
      ProfesionModule,
      ImgParticipanteModule,
      UploadImgModule,
      OpenAIModule,
      AIModule,
      DidModule,
      MensajeModule,
      //Wav2lipModule,
            ],
  controllers: [],
  providers: [],
})
export class AppModule {}
