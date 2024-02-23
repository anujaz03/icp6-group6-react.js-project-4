import React from 'react'
import './Card.css'

function Card({title,price,description}) {
  return (
    <div className='card'>
 
       <h1 className='C-hading'>{title}</h1>
       <h3 className='C-hading-1'>{description}</h3>

  </div>
    
  )
}

export default Card