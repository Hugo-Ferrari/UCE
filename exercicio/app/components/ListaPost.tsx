import React, { useEffect, useState } from "react";
import { Todo } from "../type/tipos";

function ListaPost() {
  const [carregando, setCarregando] = useState(false);
  const [todo, setTodo] = useState<Todo[]>([]);
  useEffect(() => {
    async function carregar() {
      setCarregando(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?userId=1",
        );
        setTodo(await response.json());
      } catch (error) {
        error instanceof Error ? error.message : "Erro desconhecido";
      } finally {
        setCarregando(true);
      }
    }
    carregar();
  }, []);

  return (
    <li>
      {carregando
        ? "Carregando"
        : todo.map((tar) => <ol key={tar.id}>{tar.title}</ol>)}
    </li>
  );
}

export default ListaPost;
