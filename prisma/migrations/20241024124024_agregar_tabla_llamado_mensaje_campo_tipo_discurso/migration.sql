/*
  Warnings:

  - Added the required column `TipoDiscurso` to the `LlamadoMensaje` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LlamadoMensaje" ADD COLUMN     "TipoDiscurso" TEXT NOT NULL;
