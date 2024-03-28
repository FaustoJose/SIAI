import { Module } from '@nestjs/common';
import { UsuarioModule } from './Usuarios/Usuario.module';
import { PreguntasFrecuenteModule } from './PreguntasFrecuentes/PreguntasFrecuentes.module';
import { RegistroEventoModule } from './RegistroEventos/RegistroEventos.module';
import { ParticipantesEventoModule } from './ParticipantesEvento/ParticipantesEvento.module';
import { RespuestasIndicadaModule } from './RespuestasIndicadas/RespuestasIndicadas.module';
import { ListadoModule } from './Listados/Listados.module';
import { hablarModule } from './hablar/hablar.module';


@Module({
  imports: [

      UsuarioModule,
      PreguntasFrecuenteModule,
      RegistroEventoModule,
      ParticipantesEventoModule,
      RespuestasIndicadaModule,
      ListadoModule,
      hablarModule
            ],
  controllers: [],
  providers: [],
})
export class AppModule {}
