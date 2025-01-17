/*
  Warnings:

  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[msMessageId]` on the table `Email` will be added. If there are existing duplicate values, this will fail.
  - Made the column `receiver` on table `Email` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sender` on table `Email` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isInternalUser` on table `ThreadParticipant` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_senderEmail_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_threadId_fkey";

-- DropForeignKey
ALTER TABLE "ThreadParticipant" DROP CONSTRAINT "ThreadParticipant_email_fkey";

-- AlterTable
ALTER TABLE "Email" ADD COLUMN     "msMessageId" TEXT,
ADD COLUMN     "threadId" TEXT,
ALTER COLUMN "receiver" SET NOT NULL,
ALTER COLUMN "sender" SET NOT NULL;

-- AlterTable
ALTER TABLE "Thread" ADD COLUMN     "subject" TEXT;

-- AlterTable
ALTER TABLE "ThreadParticipant" ALTER COLUMN "isInternalUser" SET NOT NULL;

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "User";

-- CreateIndex
CREATE UNIQUE INDEX "Email_msMessageId_key" ON "Email"("msMessageId");

-- CreateIndex
CREATE INDEX "Email_sentDateTime_idx" ON "Email"("sentDateTime");

-- CreateIndex
CREATE INDEX "Email_receivedDateTime_idx" ON "Email"("receivedDateTime");

-- CreateIndex
CREATE INDEX "Email_threadId_idx" ON "Email"("threadId");

-- CreateIndex
CREATE INDEX "Thread_createdAt_idx" ON "Thread"("createdAt");

-- CreateIndex
CREATE INDEX "ThreadParticipant_email_idx" ON "ThreadParticipant"("email");

-- AddForeignKey
ALTER TABLE "Email" ADD CONSTRAINT "Email_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "Thread"("id") ON DELETE SET NULL ON UPDATE CASCADE;
