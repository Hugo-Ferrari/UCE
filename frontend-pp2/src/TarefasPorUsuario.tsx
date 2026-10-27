import React, { useEffect, useState } from "react";
import type { Todo } from "./types/tipos";

function TarefasPorUsuario() {
  const [userId, setUserId] = useState(1);
  const [todo, setTodo] = useState<Todo[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function carregar() {
      setCarregando(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
        );
        setTodo(await response.json());
        setCarregando(false);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Erro desconhecido");
      } finally {
        setCarregando(false);
      }
    }
    carregar();
  }, [userId]);
  return (
    <div className="space-y-3">
      <label className="flex items-center gap-2">
        USUARIO
        <select
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
          className="border rounded-2xl px-2 py-1">
            {
                [1,2,3,4,5,6,7,8,9,10].map((n) =>(
                    <option key={n}>{n}</option>
                ))
            }
          </select>
      </label>
      {carregando ?(
        <p>Carregando...</p>
      ): (
        <ul className="space-y-1">{todo.map((tarefas)=>(
            <li key={tarefas.id}>{tarefas.completed ? "[X]" : "[]"} {tarefas.title}</li>
        ))}</ul>
      ) }
    </div>
  );
}

export default TarefasPorUsuario;
