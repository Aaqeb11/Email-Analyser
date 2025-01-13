/*
  Warnings:

  - Changed the type of `receiver` on the `Email` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `sender` on the `Email` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Email" DROP COLUMN "receiver",
ADD COLUMN     "receiver" JSONB NOT NULL,
DROP COLUMN "sender",
ADD COLUMN     "sender" JSONB NOT NULL;
