/*
  Warnings:

  - Added the required column `receiver` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `summary` on the `EmailSummary` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Email" ADD COLUMN     "receiver" TEXT NOT NULL,
ADD COLUMN     "sender" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "EmailSummary" DROP COLUMN "summary",
ADD COLUMN     "summary" JSONB NOT NULL;
