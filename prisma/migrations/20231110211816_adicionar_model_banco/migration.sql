-- AlterTable
ALTER TABLE "lancamento" ADD COLUMN     "banco_id" BIGINT;

-- CreateTable
CREATE TABLE "banco" (
    "id" BIGSERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "dt_lancamento" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "saldo" DECIMAL(18,2) DEFAULT 0,

    CONSTRAINT "banco_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "lancamento" ADD CONSTRAINT "lancamento_banco_id_fkey" FOREIGN KEY ("banco_id") REFERENCES "banco"("id") ON DELETE SET NULL ON UPDATE CASCADE;
