import React from 'react'
import type { Todo } from './types/tipos';



function ListaTarefas() {
    const tarefas: Todo[] = [
      { userId:1, id: 1, title: "Ler o capítulo 4", completed: true },
      { userId:1, id: 2, title: "Fazer a lista de exercícios", completed: false },
      { userId:1, id: 3, title: "Estudar para a prova", completed: false },
    ];
    return (
    <ul>
       {tarefas.map((item) =>(
        <li key={item.id}>
            {item.title} - {item.completed ? "completo" : "incompleto" }
            </li>
       ))}
    </ul>
  )
}

export default ListaTarefas