'use client';

import { useState } from 'react';

interface PassosInterface {
  passos: number;
}

function BotaoPasso({ passos }: PassosInterface) {
  const [valor, setValor] = useState(0);

  function aumentar() {
    setValor((valorAtual) => valorAtual + passos);
  }

  function diminuir() {
    setValor((valorAtual) => {
      if (valorAtual <= 0) return valorAtual;
      return valorAtual - passos;
    });
  }

  function zerar() {
    setValor(0);
  }

  return (
    <div>
      <h2>{passos}</h2>
      <p>{valor}</p>
      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
      <button onClick={zerar}>Zerar</button>
    </div>
  );
}

export default BotaoPasso;