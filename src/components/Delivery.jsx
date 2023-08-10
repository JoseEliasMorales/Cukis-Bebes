import React from 'react'
import '../styles/delivery.css'
import confirmation from '../assets/confirmation1.png'
import clothing from '../assets/babyClothing1.png'
import box from '../assets/box1.png'
import globos from '../assets/imagenGlobos3.png'

function Delivery () {
  return (
    <div className='contDelivery'>
      <div className='delivery'>
        <h3 className='titleDelivery'>Entregas personales</h3>
        <img src={confirmation} alt='Entregas personales' />
      </div>
      <div className='separador' />
      <div className='delivery'>
        <h3 className='titleDelivery'>Ropa hecha a mano</h3>
        <img src={clothing} alt='Ropa hecha a mano' />
      </div>
      <div className='separador' />
      <div className='delivery'>
        <h3 className='titleDelivery'>Compra totalmente segura</h3>
        <img src={box} alt='Compra totalmente segura' style={{ height: '262px' }} />
      </div>
      <img src={globos} alt=' ' className='globosDelivery' />
    </div>
  )
}

export default Delivery
