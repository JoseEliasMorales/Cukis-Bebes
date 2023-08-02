import React from 'react'
import '../styles/home.css'
import CardsNosotros from '../components/CardsNosotros'

const cardData = [
  {
    title: 'Misión',
    p: 'Nuestra misión es poder brindarte una amplia variedad de prendas adorables, suaves y de alta calidad, siendo cada una única y distinta.',
    image: '../public/img/imageCard1.png'
  },
  {
    title: 'Visión',
    p: 'Nuestra visión es convertirnos en tu opción preferida a la hora de elegir ropa y accesorios para tus hijos, llegando a cada día a más hogares.',
    image: '../public/img/imageCard2.png'
  },
  {
    title: 'Valores',
    p: 'Nuestro valores se basan en la originalidad, en el amor y en el cuidado. Buscando prendas que acompañen a tu bebe en sus primeros pasos.',
    image: '../public/img/imageCard3.png'
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
