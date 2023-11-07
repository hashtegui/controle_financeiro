'use client';

import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import { FiArrowDownLeft, FiArrowUpRight } from 'react-icons/fi';

export default function PaginaPrincipal() {
    return (
        <main className="min-h-screen flex justify-center py-12 bg-green-500">
            <div className="max-w-7xl w-full h-3/4 flex flex-col gap-8 py-8 px-32 bg-white rounded-3xl">
                <section className="w-full flex items-center justify-end">
                    <div className="w-12 h-12 rounded-full bg-emerald-400"></div>
                </section>

                <section className="w-full flex flex-col gap-2">
                    <span className="font-light">Saldo Atual</span>
                    <h1 className="text-5xl font-bold">R$ 3.000,00</h1>
                </section>

                <section className="w-full flex items-center gap-4">
                    <div className="relative w-full">
                        <AiOutlineSearch className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-500 bg-gray-100" />
                        <input
                            className="w-full rounded-md bg-gray-100 text-black border-none text-base p-2 outline-gray-400 py-4 px-2"
                            type="search"
                            placeholder="Buscar..."
                        />
                    </div>
                    <div className="w-full text-base bg-gray-100 rounded-md flex items-center gap-1 py-4 px-2">
                        <FiArrowDownLeft className="text-green-500" />
                        <span>Entradas:</span>
                        <span className="font-bold">R$ 3.000,00</span>
                    </div>
                    <div className="w-full text-base bg-gray-100 rounded-md flex items-center gap-1 py-4 px-2">
                        <FiArrowUpRight className="text-red-500" />
                        <span>Saídas:</span>
                        <span className="font-bold">R$ 9,000,00</span>
                    </div>
                    <button className="w-full rounded-md flex items-center justify-center bg-violet-700 text-white font-semibold border-none text-base cursor-pointer gap-2 py-4 px-2">
                        <AiOutlinePlus />
                        Nova Transação
                    </button>
                </section>
            </div>
        </main>
    );
}
