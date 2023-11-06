"use server";

import prisma from "@/lib/prisma";

export async function addNovaConta(form: FormData) {
  const descricao = form.get("descricao");
  const valor = Number(form.get("valor"));
  const dtVencimento = new Date(form.get("dtVencimento") as string);

  try {
    const novaConta = await prisma.contasPagar.create({
      data: {
        dtVencimento: dtVencimento,
        valor: valor,
        descricao: String(descricao),
      },
    });

    console.log("Nota conta criada com sucesso\n", novaConta);
  } catch (error) {
    console.log(error);
  }
}
