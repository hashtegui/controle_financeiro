/*
  Warnings:

  - You are about to drop the `Cartao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cartao" DROP CONSTRAINT "Cartao_user_id_fkey";

-- DropForeignKey
ALTER TABLE "banco" DROP CONSTRAINT "banco_user_id_fkey";

-- DropForeignKey
ALTER TABLE "conta_pagar" DROP CONSTRAINT "conta_pagar_user_id_fkey";

-- DropForeignKey
ALTER TABLE "lancamento" DROP CONSTRAINT "lancamento_cartao_id_fkey";

-- DropForeignKey
ALTER TABLE "lancamento" DROP CONSTRAINT "lancamento_user_id_fkey";

-- DropTable
DROP TABLE "Cartao";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "cartao" (
    "id" BIGSERIAL NOT NULL,
    "dt_criacao" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "descricao" VARCHAR(100) NOT NULL,
    "dia_fechamento" INTEGER,
    "dia_vencimento" INTEGER,
    "user_id" BIGINT,

    CONSTRAINT "cartao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" BIGSERIAL NOT NULL,
    "dt_criacao" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "login" VARCHAR(30) NOT NULL,
    "password" VARCHAR(30) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_login_key" ON "user"("login");

-- AddForeignKey
ALTER TABLE "conta_pagar" ADD CONSTRAINT "conta_pagar_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lancamento" ADD CONSTRAINT "lancamento_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lancamento" ADD CONSTRAINT "lancamento_cartao_id_fkey" FOREIGN KEY ("cartao_id") REFERENCES "cartao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "banco" ADD CONSTRAINT "banco_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartao" ADD CONSTRAINT "cartao_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
