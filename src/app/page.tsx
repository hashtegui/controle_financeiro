"use client";

import NewTransactionForm from "@/components/form";

import Modal from "@/components/modal";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

export default function PaginaPrincipal() {
  const [open, onOpenChange] = useState(false);

  return (
    <main className="min-h-screen max-md:px-8 flex justify-center py-12 bg-green-500">
      <div className="max-w-7xl max-md:px-8 max-md:text-center w-full h-3/4 flex flex-col gap-8 py-8 px-32 bg-white rounded-3xl">
        <section className="w-full flex items-center justify-end">
          <div className="w-12 h-12 rounded-full bg-emerald-400"></div>
        </section>

        <section className="w-full flex flex-col gap-4">
          <span className="font-light">Saldo Atual</span>
          <h1 className="text-5xl font-bold text-emerald-500">R$ 3.000,00</h1>
        </section>

        <section className="w-full flex items-center gap-4 max-lg:flex-col">
          <div className="relative w-full">
            <AiOutlineSearch className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-500 bg-gray-100" />
            <input
              className="w-full rounded-md bg-gray-100 text-black border-none text-base outline-gray-400 p-4"
              type="search"
              placeholder="Buscar..."
            />
          </div>
          <div className="w-full max-md:justify-center text-base text-white font-semibold bg-emerald-500 rounded-md flex items-center gap-1 py-4 px-2">
            <FiArrowDownLeft />
            <span>Entradas:</span>
            <span>R$ 3.000,00</span>
          </div>
          <div className="w-full max-md:justify-center text-base text-white font-semibold bg-red-500 rounded-md flex items-center gap-1 py-4 px-2">
            <FiArrowUpRight />
            <span>Saídas:</span>
            <span>R$ 9,000,00</span>
          </div>
          {/* <button
            onClick={openModal}
            className="w-full max-md:justify-center rounded-md flex items-center justify-center bg-violet-700 text-white font-semibold border-none text-base cursor-pointer gap-2 py-4 px-2"
          >
            <AiOutlinePlus />
            Nova Transação
          </button> */}
          <Modal open={open} onOpenChange={onOpenChange}>
            <Modal.Button className="w-full max-md:justify-center rounded-md flex items-center justify-center bg-violet-700 text-white font-semibold border-none text-base cursor-pointer gap-2 py-4 px-2">
              <AiOutlinePlus />
              Nova Transação
            </Modal.Button>
            <Modal.Content title="Nova Transação">
              <NewTransactionForm />
            </Modal.Content>
          </Modal>
        </section>
      </div>
    </main>
  );
}
