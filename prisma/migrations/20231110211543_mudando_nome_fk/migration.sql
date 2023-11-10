/*
  Warnings:

  - You are about to drop the column `contarPagarId` on the `lancamento` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[conta_pagar_id]` on the table `lancamento` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "lancamento" DROP CONSTRAINT "lancamento_contarPagarId_fkey";

-- DropIndex
DROP INDEX "lancamento_contarPagarId_key";

-- AlterTable
ALTER TABLE "lancamento" DROP COLUMN "contarPagarId",
ADD COLUMN     "conta_pagar_id" BIGINT;

-- CreateIndex
CREATE UNIQUE INDEX "lancamento_conta_pagar_id_key" ON "lancamento"("conta_pagar_id");

-- AddForeignKey
ALTER TABLE "lancamento" ADD CONSTRAINT "lancamento_conta_pagar_id_fkey" FOREIGN KEY ("conta_pagar_id") REFERENCES "conta_pagar"("id") ON DELETE SET NULL ON UPDATE CASCADE;
