import React from 'react'
import '../styles/sizes.css'
import SizesCard from '../components/sizesCard'
import talle0 from '../assets/talle0.png'
import talle1 from '../assets/talle1.png'
import talle2 from '../assets/talle2.png'
import talle3 from '../assets/talle3.png'
import talle4 from '../assets/talle4.png'

const cardSizeData = [
  {
    edad: '0 a 3 Meses',
    peso: '3kg a 5kg',
    image: talle0
  },
  {
    edad: '3 a 6 Meses',
    peso: '4kg a 6kg',
    image: talle1
  },
  {
    edad: '6 a 9 Meses',
    peso: '6kg a 8kg',
    image: talle2
  },
  {
    edad: '9 a 12 Meses',
    peso: '8kg a 10kg',
    image: talle3
  },
  {
    edad: '12 a 18 Meses',
    peso: '10kg a 14kg',
    image: talle4
  }
]

function CardsSizesContainer () {
  return (
    <div className='cardsSizes'>
      {cardSizeData.map((card, index) => (
        <SizesCard key={index} edad={card.edad} peso={card.peso} image={card.image} />
      ))}
    </div>
  )
}

export default CardsSizesContainer
