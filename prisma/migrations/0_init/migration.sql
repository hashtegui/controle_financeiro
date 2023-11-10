-- CreateTable
CREATE TABLE "conta_pagar" (
    "id" BIGSERIAL NOT NULL,
    "dt_vencimento" DATE NOT NULL,
    "dt_pagamento" TIMESTAMP(3),
    "valor" DECIMAL(18,2) DEFAULT 0,
    "pago" BOOLEAN DEFAULT false,
    "descricao" VARCHAR(100),

    CONSTRAINT "conta_pagar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lancamento" (
    "id" BIGSERIAL NOT NULL,
    "valor" DECIMAL(18,2) DEFAULT 0,
    "tipo" VARCHAR(1),
    "dt_lancamento" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "contarPagarId" BIGINT,

    CONSTRAINT "lancamento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lancamento_contarPagarId_key" ON "lancamento"("contarPagarId");

-- AddForeignKey
ALTER TABLE "lancamento" ADD CONSTRAINT "lancamento_contarPagarId_fkey" FOREIGN KEY ("contarPagarId") REFERENCES "conta_pagar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

