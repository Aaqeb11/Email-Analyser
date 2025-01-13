/*
  Warnings:

  - You are about to drop the column `vectorEmbedding` on the `Email` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Email" DROP COLUMN "vectorEmbedding",
ADD COLUMN     "embedding" vector(1536);
