import React, { useEffect, useState } from "react";
import { Post } from "../type/tipos";

function BuscaPorTitulo() {
  const [post, setPost] = useState<Post[]>([]);
  const [busca, setBusca] = useState("");
  useEffect(() => {
    async function carregar() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      setPost(await response.json());
    }
    carregar();
  }, []);

  const encontrados = post.filter((p) =>
    p.title.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div>
      <h2>Busca por Título</h2>

      <input
        type="text"
        placeholder="Pesquisar post..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <p>
        {encontrados.length} de {post.length} posts encontrados
      </p>

      {encontrados.length === 0 ? (
        <p>Nenhum resultado</p>
      ) : (
        <ul>
          {encontrados.map((p) => (
            <li key={p.id}>
              <strong>{p.title}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BuscaPorTitulo;
