/*
  Warnings:

  - You are about to drop the column `folder_key` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `messages` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_folder_key_user_id_fkey";

-- DropIndex
DROP INDEX "messages_folder_key_user_id_received_date_time_idx";

-- DropIndex
DROP INDEX "messages_folder_key_user_id_sent_date_time_idx";

-- AlterTable
ALTER TABLE "messages" DROP COLUMN "folder_key",
DROP COLUMN "user_id";

-- CreateTable
CREATE TABLE "_FolderMessageToMessage" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_FolderMessageToMessage_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_FolderMessageToMessage_B_index" ON "_FolderMessageToMessage"("B");

-- AddForeignKey
ALTER TABLE "_FolderMessageToMessage" ADD CONSTRAINT "_FolderMessageToMessage_A_fkey" FOREIGN KEY ("A") REFERENCES "folder_messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FolderMessageToMessage" ADD CONSTRAINT "_FolderMessageToMessage_B_fkey" FOREIGN KEY ("B") REFERENCES "messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
