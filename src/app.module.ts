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
      ProfesionModule
            ],
  controllers: [],
  providers: [],
})
export class AppModule {}
