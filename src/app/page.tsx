"use client";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

export default function PaginaPrincipal() {
  return (
    <>
      <div className="container">
        <div className="flex flex-col items-center">
          <div aria-label="Saldo" className="">
            <div className="flex flex-row">
              <span>Saldo Atual</span>
              <h1>R$ 3.000,00</h1>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="relative">
              <AiOutlineSearch
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "5%",
                  transform: "translateY(-50%)",
                }}
              />
              <input
                className="rounded-md bg-gray-100 text-white border-none text-xs p-2"
                type="search"
                placeholder="Buscar..."
              />
            </div>
            <div className="text-xs bg-gray-100 rounded-md p-2 flex items-center gap-2">
              <FiArrowDownLeft style={{ color: "green" }} />
              <span>Entradas:</span>
              <span className="font-bold">R$ 3.000,00</span>
            </div>
            <div className="text-xs bg-gray-100 rounded-md p-2 flex items-center gap-2">
              <FiArrowUpRight style={{ color: "red" }} />
              <span>Saídas: </span>
              <span className="font-bold">R$ 9,000,00</span>
            </div>
            <button className="rounded-md bg-violet-700 text-white border-none text-xs p-2 cursor-pointer flex items-center gap-2">
              <AiOutlinePlus />
              Nova Transação
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
