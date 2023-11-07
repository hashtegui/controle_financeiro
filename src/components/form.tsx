import { useState } from "react";
// ajustar form
export default function NewTransactionForm() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [dtVencimento, setDtVencimento] = useState("");

  const handleDescricaoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescricao(event.target.value);
  };

  const handleValorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValor(event.target.value);
  };

  const handleDtVencimentoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDtVencimento(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted");
  };

  return (
    <form
      className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          htmlFor="descricao"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Descrição
        </label>
        <input
          type="text"
          id="descricao"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          value={descricao}
          onChange={handleDescricaoChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="valor"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Valor
        </label>
        <input
          type="text"
          id="valor"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          value={valor}
          onChange={handleValorChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="dtVencimento"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Data de Vencimento
        </label>
        <input
          type="text"
          id="dtVencimento"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          value={dtVencimento}
          onChange={handleDtVencimentoChange}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        Adicionar Transação
      </button>
    </form>
  );
}
