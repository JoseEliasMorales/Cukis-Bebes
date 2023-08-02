import React from 'react'
import '../styles/cardNosotros.css'
import '../styles/home.css'

function CardsNosotros ({ title, p, image }) {
  return (
    <div className='cardNosotros'>
      <h3 className='subtitle'>{title}</h3>
      <p className='texto'>{p}</p>
      <img src={image} alt='' />
    </div>
  )
}

export default CardsNosotros
