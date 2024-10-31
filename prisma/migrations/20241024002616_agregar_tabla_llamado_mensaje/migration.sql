-- CreateTable
CREATE TABLE "LlamadoMensaje" (
    "Id" SERIAL NOT NULL,
    "event_id" INTEGER NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Text" TEXT NOT NULL,

    CONSTRAINT "LlamadoMensaje_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "LlamadoMensaje" ADD CONSTRAINT "LlamadoMensaje_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "RegistroEventos"("event_id") ON DELETE RESTRICT ON UPDATE CASCADE;
