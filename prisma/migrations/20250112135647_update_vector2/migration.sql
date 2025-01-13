/*
  Warnings:

  - The `vectorEmbedding` column on the `Email` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Email" DROP COLUMN "vectorEmbedding",
ADD COLUMN     "vectorEmbedding" DOUBLE PRECISION[];
