import React from 'react'
interface CardProps{
    title:string 
    description:string
}

function Card({title,description}:CardProps) {

  return (
    <div className='rounded-lg bg-amber-400 p-4 border '>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Card