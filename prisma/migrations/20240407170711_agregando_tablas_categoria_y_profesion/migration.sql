/*
  Warnings:

  - You are about to drop the `Listados` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RespuestasIndicadas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category_id` to the `PreguntasFrecuentes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profetion_id` to the `RegistroEventos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Listados" DROP CONSTRAINT "Listados_event_id_fkey";

-- DropForeignKey
ALTER TABLE "Listados" DROP CONSTRAINT "Listados_participant_id_fkey";

-- DropForeignKey
ALTER TABLE "RespuestasIndicadas" DROP CONSTRAINT "RespuestasIndicadas_faq_id_fkey";

-- DropForeignKey
ALTER TABLE "RespuestasIndicadas" DROP CONSTRAINT "RespuestasIndicadas_user_id_fkey";

-- AlterTable
ALTER TABLE "PreguntasFrecuentes" ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "RegistroEventos" ADD COLUMN     "profetion_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Listados";

-- DropTable
DROP TABLE "RespuestasIndicadas";

-- CreateTable
CREATE TABLE "Category" (
    "category_id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "Profesion" (
    "profetion_id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Profesion_pkey" PRIMARY KEY ("profetion_id")
);

-- AddForeignKey
ALTER TABLE "PreguntasFrecuentes" ADD CONSTRAINT "PreguntasFrecuentes_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroEventos" ADD CONSTRAINT "RegistroEventos_profetion_id_fkey" FOREIGN KEY ("profetion_id") REFERENCES "Profesion"("profetion_id") ON DELETE RESTRICT ON UPDATE CASCADE;
