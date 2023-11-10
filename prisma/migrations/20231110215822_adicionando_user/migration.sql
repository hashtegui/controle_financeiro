/*
  Warnings:

  - You are about to drop the column `dt_lancamento` on the `banco` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "banco" DROP COLUMN "dt_lancamento",
ADD COLUMN     "dt_criacao" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_id" BIGINT;

-- AlterTable
ALTER TABLE "conta_pagar" ADD COLUMN     "user_id" BIGINT;

-- AlterTable
ALTER TABLE "lancamento" ADD COLUMN     "cartao_id" BIGINT,
ADD COLUMN     "user_id" BIGINT;

-- CreateTable
CREATE TABLE "Cartao" (
    "id" BIGSERIAL NOT NULL,
    "dt_criacao" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "descricao" VARCHAR(100) NOT NULL,
    "dia_fechamento" INTEGER,
    "dia_vencimento" INTEGER,
    "user_id" BIGINT,

    CONSTRAINT "Cartao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "dt_criacao" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "login" VARCHAR(30) NOT NULL,
    "password" VARCHAR(30) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- AddForeignKey
ALTER TABLE "conta_pagar" ADD CONSTRAINT "conta_pagar_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lancamento" ADD CONSTRAINT "lancamento_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lancamento" ADD CONSTRAINT "lancamento_cartao_id_fkey" FOREIGN KEY ("cartao_id") REFERENCES "Cartao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "banco" ADD CONSTRAINT "banco_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cartao" ADD CONSTRAINT "Cartao_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
