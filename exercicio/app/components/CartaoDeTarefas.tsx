"use client";

import { useState } from "react";

interface TarefaCardProps {
  titulo: string;
}

export default function TarefaCard({ titulo }: TarefaCardProps) {
  const [concluido, setConcluido] = useState(false);

  return (
    <div
      className={`rounded-lg border p-4 text-slate-800 shadow-sm transition-colors ${
        concluido
          ? "border-green-500 bg-green-50/20"
          : "border-slate-300 bg-white"
      }`}
    >
      <h1 className="text-sm font-bold text-slate-400 mb-1">
        Cartão de Tarefa
      </h1>

      <h2
        className={`text-lg font-semibold ${concluido ? "line-through text-slate-400" : ""}`}
      >
        {titulo}
      </h2>

      <button
        className={`mt-3 rounded px-3 py-1.5 text-sm font-medium text-white transition-colors ${
          concluido ? " bg-slate-500" : "bg-green-600"
        }`}
        onClick={() => setConcluido(!concluido)}
      >
        {concluido ? "Desfazer" : "Concluir"}
      </button>
    </div>
  );
}
