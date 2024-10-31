/*
  Warnings:

  - Added the required column `Img_id` to the `ParticipantesEvento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `academic_degree` to the `ParticipantesEvento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ParticipantesEvento" ADD COLUMN     "Img_id" INTEGER NOT NULL,
ADD COLUMN     "academic_degree" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ImgParticipante" (
    "Img_id" SERIAL NOT NULL,
    "Img_name" TEXT NOT NULL,
    "Img_type" TEXT NOT NULL,

    CONSTRAINT "ImgParticipante_pkey" PRIMARY KEY ("Img_id")
);

-- AddForeignKey
ALTER TABLE "ParticipantesEvento" ADD CONSTRAINT "ParticipantesEvento_Img_id_fkey" FOREIGN KEY ("Img_id") REFERENCES "ImgParticipante"("Img_id") ON DELETE RESTRICT ON UPDATE CASCADE;
