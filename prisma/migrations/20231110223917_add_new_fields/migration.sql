/*
  Warnings:

  - Made the column `dt_criacao` on table `banco` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dt_criacao` on table `cartao` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dt_lancamento` on table `lancamento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dt_criacao` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "banco" ALTER COLUMN "dt_criacao" SET NOT NULL;

-- AlterTable
ALTER TABLE "cartao" ALTER COLUMN "dt_criacao" SET NOT NULL;

-- AlterTable
ALTER TABLE "conta_pagar" ADD COLUMN     "dt_criacao" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "lancamento" ALTER COLUMN "dt_lancamento" SET NOT NULL;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "dt_criacao" SET NOT NULL;
