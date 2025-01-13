/*
  Warnings:

  - You are about to drop the column `contactId` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the column `leadId` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the column `receiverId` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the `Attachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Candidate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contract` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JobRequirement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lead` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CandidateToJobRequirement` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Attachment" DROP CONSTRAINT "Attachment_emailId_fkey";

-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_candidateId_fkey";

-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_jobRequirementId_fkey";

-- DropForeignKey
ALTER TABLE "Email" DROP CONSTRAINT "Email_contactId_fkey";

-- DropForeignKey
ALTER TABLE "Email" DROP CONSTRAINT "Email_leadId_fkey";

-- DropForeignKey
ALTER TABLE "Email" DROP CONSTRAINT "Email_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "Email" DROP CONSTRAINT "Email_senderId_fkey";

-- DropForeignKey
ALTER TABLE "JobRequirement" DROP CONSTRAINT "JobRequirement_companyId_fkey";

-- DropForeignKey
ALTER TABLE "JobRequirement" DROP CONSTRAINT "JobRequirement_leadId_fkey";

-- DropForeignKey
ALTER TABLE "Lead" DROP CONSTRAINT "Lead_assignedToId_fkey";

-- DropForeignKey
ALTER TABLE "Lead" DROP CONSTRAINT "Lead_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Lead" DROP CONSTRAINT "Lead_createdById_fkey";

-- DropForeignKey
ALTER TABLE "_CandidateToJobRequirement" DROP CONSTRAINT "_CandidateToJobRequirement_A_fkey";

-- DropForeignKey
ALTER TABLE "_CandidateToJobRequirement" DROP CONSTRAINT "_CandidateToJobRequirement_B_fkey";

-- AlterTable
ALTER TABLE "Email" DROP COLUMN "contactId",
DROP COLUMN "leadId",
DROP COLUMN "receiverId",
DROP COLUMN "senderId";

-- DropTable
DROP TABLE "Attachment";

-- DropTable
DROP TABLE "Candidate";

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "Contact";

-- DropTable
DROP TABLE "Contract";

-- DropTable
DROP TABLE "Employee";

-- DropTable
DROP TABLE "JobRequirement";

-- DropTable
DROP TABLE "Lead";

-- DropTable
DROP TABLE "_CandidateToJobRequirement";

-- DropEnum
DROP TYPE "CandidateStatus";

-- DropEnum
DROP TYPE "CompanyStatus";

-- DropEnum
DROP TYPE "ContractStatus";

-- DropEnum
DROP TYPE "Department";

-- DropEnum
DROP TYPE "EmployeeType";

-- DropEnum
DROP TYPE "JobStatus";

-- DropEnum
DROP TYPE "LeadStatus";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "EmailSummary" (
    "id" TEXT NOT NULL,
    "emailId" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "topics" TEXT[],
    "embedding" vector(1536),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmailSummary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailSummary_emailId_key" ON "EmailSummary"("emailId");

-- AddForeignKey
ALTER TABLE "EmailSummary" ADD CONSTRAINT "EmailSummary_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "Email"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
