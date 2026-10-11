import React from 'react'

function ListaSimples() {
    const linguagens = ['TypeScript', 'React', 'Node', 'Prisma' ]
  return (
    <ul className=' list-disc pl-5'>
        {linguagens.map((item) =>(
            <li key={item}>
                {item}
            </li>
        ))}
    </ul>
  )
}

export default ListaSimples