import React, { useState } from "react";
interface Moedas {
  tipo: "USD" | "EUR ";
  taxa: number;
}
function ConversorMoedas({ tipo, taxa }: Moedas) {
  const [valor, setValor] = useState(0);
  const [converter, setConverter] = useState<number | null>(null);

  function conversao() {
    setConverter(valor * taxa);
  }

  return (
    <div>
      <h1>Conversao de Moeda</h1>
      <input
        type="text"
        placeholder="Digite o valor para fazer a conversao"
        onChange={(e) => setValor(parseFloat(e.target.value))}
      />
      <button onClick={conversao}>Converter</button>
      <h2>
        {converter?.toFixed(2)} - {tipo}
      </h2>
    </div>
  );
}

export default ConversorMoedas;
