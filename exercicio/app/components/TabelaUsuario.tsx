import React, { useEffect, useState } from "react";
import { User } from "../type/user";

function TabelaUsuario() {
  const [user, setUser] = useState<User[]>([]);
  useEffect(() => {
    async function carregando() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users ",
        );
        setUser(await response.json());
      } catch (e) {
        e instanceof Error ? e.message : "erro desconhecido";
      }
    }
    carregando()
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>...
        </tr>
      </thead>
      <tbody>
        {user.map((u) => (
          <tr key={u.id}>
            <td>{u.name}</td>
            <a href={`mailto:${u.email}`}>.{u.website}</a>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaUsuario;
