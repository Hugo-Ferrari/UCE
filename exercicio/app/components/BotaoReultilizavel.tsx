'use client';

import React from 'react';

interface Botao {
  texto: string;
  variante: 'perigo' | 'primario';
  onClick: () => void;
}

function BotaoReultilizavel({ texto, variante, onClick }: Botao) {
  return (
    <button
      onClick={onClick}
      className={variante === 'primario' ? 'bg-teal-600' : 'bg-red-600'}
    >
      {texto}
    </button>
  );
}

export default BotaoReultilizavel;