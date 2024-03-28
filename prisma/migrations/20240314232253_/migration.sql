-- CreateTable
CREATE TABLE "Usuarios" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "PreguntasFrecuentes" (
    "faq_id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "PreguntasFrecuentes_pkey" PRIMARY KEY ("faq_id")
);

-- CreateTable
CREATE TABLE "RegistroEventos" (
    "event_id" SERIAL NOT NULL,
    "event_name" TEXT NOT NULL,
    "event_date" TIMESTAMP(3) NOT NULL,
    "event_location" TEXT NOT NULL,

    CONSTRAINT "RegistroEventos_pkey" PRIMARY KEY ("event_id")
);

-- CreateTable
CREATE TABLE "ParticipantesEvento" (
    "participant_id" SERIAL NOT NULL,
    "event_id" INTEGER NOT NULL,
    "participant_name" TEXT NOT NULL,
    "participant_role" TEXT NOT NULL,
    "participant_status" TEXT NOT NULL,

    CONSTRAINT "ParticipantesEvento_pkey" PRIMARY KEY ("participant_id")
);

-- CreateTable
CREATE TABLE "RespuestasIndicadas" (
    "indication_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "faq_id" INTEGER NOT NULL,
    "indication_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RespuestasIndicadas_pkey" PRIMARY KEY ("indication_id")
);

-- CreateTable
CREATE TABLE "Listados" (
    "list_id" SERIAL NOT NULL,
    "event_id" INTEGER NOT NULL,
    "participant_id" INTEGER NOT NULL,
    "list_date" TIMESTAMP(3) NOT NULL,
    "list_status" TEXT NOT NULL,

    CONSTRAINT "Listados_pkey" PRIMARY KEY ("list_id")
);

-- AddForeignKey
ALTER TABLE "ParticipantesEvento" ADD CONSTRAINT "ParticipantesEvento_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "RegistroEventos"("event_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespuestasIndicadas" ADD CONSTRAINT "RespuestasIndicadas_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Usuarios"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespuestasIndicadas" ADD CONSTRAINT "RespuestasIndicadas_faq_id_fkey" FOREIGN KEY ("faq_id") REFERENCES "PreguntasFrecuentes"("faq_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listados" ADD CONSTRAINT "Listados_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "RegistroEventos"("event_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listados" ADD CONSTRAINT "Listados_participant_id_fkey" FOREIGN KEY ("participant_id") REFERENCES "ParticipantesEvento"("participant_id") ON DELETE RESTRICT ON UPDATE CASCADE;
