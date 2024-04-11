/*
  Warnings:

  - You are about to drop the column `profetion_id` on the `RegistroEventos` table. All the data in the column will be lost.
  - Added the required column `profetion_id` to the `ParticipantesEvento` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RegistroEventos" DROP CONSTRAINT "RegistroEventos_profetion_id_fkey";

-- AlterTable
ALTER TABLE "ParticipantesEvento" ADD COLUMN     "profetion_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "RegistroEventos" DROP COLUMN "profetion_id";

-- AddForeignKey
ALTER TABLE "ParticipantesEvento" ADD CONSTRAINT "ParticipantesEvento_profetion_id_fkey" FOREIGN KEY ("profetion_id") REFERENCES "Profesion"("profetion_id") ON DELETE RESTRICT ON UPDATE CASCADE;
