/*
  Warnings:

  - You are about to drop the column `embedding` on the `Email` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Email" DROP COLUMN "embedding",
ADD COLUMN     "bodyEmbedding" vector(1536),
ADD COLUMN     "receiverEmbedding" vector(1536),
ADD COLUMN     "senderEmbedding" vector(1536),
ADD COLUMN     "subjectEmbedding" vector(1536);
