import React, { useEffect, useState } from "react";
import { Comentum } from "../type/tipos";

function ComentarioDePost() {
  const [postId, setPostId] = useState(1);
  const [comentarios, setComentarios] = useState<Comentum[]>([]);

  useEffect(() => {
    async function carregando() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        );
        const data = await response.json();
        setComentarios(data);
      } catch (error) {
        console.error(
          error instanceof Error ? error.message : "Erro desconhecido",
        );
      }
    }
    carregando();
  }, [postId]);

  return (
    <div>
      <h2>Comentários do Post</h2>

      <div>
        <label htmlFor="postIdInput">ID do Post: </label>
        <input
          id="postIdInput"
          type="number"
          min={1}
          max={100}
          value={postId}
          onChange={(e) => setPostId(Number(e.target.value))}
        />
      </div>

      <p>
        <strong>{comentarios.length} comentários encontrados</strong>
      </p>

      <ul>
        {comentarios.map((c) => (
          <li key={c.id}>
            <h4>{c.name}</h4>
            <p>
              <strong>E-mail:</strong> {c.email}
            </p>
            <p>{c.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComentarioDePost;
