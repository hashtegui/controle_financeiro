"use client";
// ajustar form
export default function NewTransactionForm() {
  return (
    <form className="">
      <section>
        <div>
          <input name="tipo" value="e" type="radio" />
          <label className="text-sm">Entrada</label>
        </div>
        <div>
          <input name="tipo" value="s" type="radio" />
          <label className="text-sm">Saida</label>
        </div>
      </section>
    </form>
  );
}
