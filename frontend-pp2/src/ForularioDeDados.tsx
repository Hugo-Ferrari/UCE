import React, { useState } from "react";
const campo = `bg-green-500 p-3`;
function ForularioDeDados() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState<number | null>(null);

  function calcular() {
    if (peso > 0 && altura > 0) {
      setImc(peso / (altura * altura));
    }
  }
  function limpar() {
    setAltura(0);
    setPeso(0);
    setImc(0)
  }
  return (
    <div className="">
        <form onChange={calcular}></form>
      <input
        type="text"
        placeholder="peso"
        className={campo}
        value={peso}
        onChange={(e) => setPeso(parseFloat(e.target.value))}
      />

      <input
        type="text"
        placeholder="altura"
        className={campo}
        value={altura}
        onChange={(e) => setAltura(parseFloat(e.target.value))}
      />
      <div className="gap-4">
        <button onClick={calcular} className="bg-pink-400 p-3">
          Calcular IMC
        </button>
        <button onClick={limpar} className="bg-blue-600 p-3">
          Limpar
        </button>
      </div>

      <p>Seu Peso é {peso}</p>
      <p>Sua altura é {altura}</p>

      {imc !== null && <p>Seu imc é {imc.toFixed(1)}</p>}
    </div>
  );
}

export default ForularioDeDados;
