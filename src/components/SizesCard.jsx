import React from 'react'
import '../styles/cardSizes.css'

function SizesCard ({ edad, peso, image }) {
  return (
    <div className='cardSizes'>
      <img src={image} alt='' className='imageSizes' />
      <svg xmlns='http://www.w3.org/2000/svg' width='215' height='4' viewBox='0 0 215 4' fill='none' className='svgTalles'>
        <path d='M2 2H213' stroke='#8D92AA' stroke-opacity='0.35' stroke-width='4' stroke-linecap='round' />
      </svg>
      <div className='contEdadPeso'>
        <div className='edadPeso'>
          <h2 className='subtitleSizes'>EDAD</h2>
          <p className='textoTalles'>{edad}</p>
        </div>
        <div className='edadPeso'>
          <h2 className='subtitleSizes'>PESO</h2>
          <p className='textoTalles'>{peso}</p>
        </div>
      </div>
    </div>
  )
}

export default SizesCard
