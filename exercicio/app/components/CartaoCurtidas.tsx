"use client"
import React, { useState } from "react";
interface CartaoProps {
  nome: string;
  preco: number;
}
function CartaoCurtidas({ nome, preco }: CartaoProps) {
  const [curtidas, setCurtidas] = useState(0);
  return (
    <div>
      <h2>{nome}</h2>
      <h3>
        {preco.toFixed(2)}
      </h3>
      <button 
      onClick={() => setCurtidas(curtidas + 1)}>
        {curtidas}
        </button>

    </div>
  );
}

export default CartaoCurtidas;
