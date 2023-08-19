import React from 'react'
import '../styles/cardNosotros.css'
import '../styles/home.css'

function CardsNosotros ({ title, p, image }) {
  return (
    <div className='cardNosotros'>
      <h3 className='subtitleH3'>{title}</h3>
      <p className='textoCards'>{p}</p>
      <img src={image} alt='' className='imgCards' />
    </div>
  )
}

export default CardsNosotros
