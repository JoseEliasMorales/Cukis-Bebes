import React from 'react'
import '../styles/home.css'
import CardsNosotros from '../components/CardsNosotros'
import card1 from '../assets/imageCard1.png'
import card2 from '../assets/imageCard2.png'
import card3 from '../assets/imageCard3.png'

const cardData = [
  {
    title: 'Misión',
    p: 'Nuestra misión es poder brindarte una amplia variedad de prendas adorables, suaves y de alta calidad, siendo cada una única y distinta.',
    image: card1
  },
  {
    title: 'Visión',
    p: 'Nuestra visión es convertirnos en tu opción preferida a la hora de elegir ropa y accesorios para tus hijos, llegando cada día a más hogares.',
    image: card2
  },
  {
    title: 'Valores',
    p: 'Nuestros valores se basan en la originalidad, en el amor y en el cuidado. Buscando prendas que acompañen a tu bebé en sus primeros pasos.',
    image: card3
  }
]

function CardsNosContainer () {
  return (
    <div className='contCardsNosotros'>
      {cardData.map((card, index) => (
        <CardsNosotros key={index} title={card.title} p={card.p} image={card.image} />
      ))}
    </div>
  )
}

export default CardsNosContainer
