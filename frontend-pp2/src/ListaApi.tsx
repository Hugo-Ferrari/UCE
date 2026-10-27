import React, { useEffect, useState } from "react";
import type { Todo } from "./types/tipos";


const API_URL = "https://jsonplaceholder.typicode.com/todos?userId=1";

function ListaApi() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function Carregar() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(` Erro http: ${response.status}`);
        }
        const dados: Todo[] = await response.json();
        setTodos(dados);
      } catch (e) {
        setErro(e instanceof Error ? e.message : "Erro Desconhecido");
      } finally {
        setCarregando(false);
      }
    }
    Carregar();
  }, []);
  if(carregando) return <p>Carregando</p>
  if(erro) return <p>Erro: {erro}</p>
  if(todos.length === 0) return <p>Nenhuma tarefa</p>

  return (
    <ul>
        {todos.map((t) => (
            <li key={t.title}>
                {t.completed ? "[x]" :'[]'}
                {t.title}
            </li>
        ))}
    </ul>
  )
}

export default ListaApi;
