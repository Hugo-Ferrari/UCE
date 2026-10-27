import React, { useState, useEffect } from "react";

type Filtro = "todas" | "pendentes" | "concluidas";

interface Tarefa {
  id: number;
  title: string;
  completed: boolean;
}

function TarefaComFiltroStatus() {
  const [todos, setTodos] = useState<Tarefa[]>([]);
  const [filtro, setFiltro] = useState<Filtro>("todas");

  useEffect(() => {
    async function carregando() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?userId=1",
        );
        setTodos(await response.json());
      } catch (e) {
        e instanceof Error ? e.message : "Erro desconhecido";
      }
    }
    carregando();
  }, []);

  const visiveis = todos.filter((t) => {
    if (filtro === "pendentes") return !t.completed;
    if (filtro === "concluidas") return t.completed;
    return true;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Lista de Tarefas</h2>

      <div>
        <button
          onClick={() => setFiltro("todas")}
          style={{ fontWeight: filtro === "todas" ? "bold" : "normal" }}
        >
          Todas
        </button>
        <button
          onClick={() => setFiltro("pendentes")}
          style={{ fontWeight: filtro === "pendentes" ? "bold" : "normal" }}
        >
          Pendentes
        </button>
        <button
          onClick={() => setFiltro("concluidas")}
          style={{ fontWeight: filtro === "concluidas" ? "bold" : "normal" }}
        >
          Concluídas
        </button>
      </div>

      <p>{visiveis.length} tarefas</p>

      <ul>
        {visiveis.map((t) => (
          <li
            key={t.id}
            style={{
              textDecoration: t.completed ? "line-through" : "none",
              color: t.completed ? "#888" : "#000",
            }}
          >
            {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TarefaComFiltroStatus;
