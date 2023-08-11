import React from 'react'
import '../styles/delivery.css'
import confirmation from '../assets/dibujo1.png'
import clothing from '../assets/dibujo2.png'
import box from '../assets/dibujo3.png'
import globos from '../assets/imagenCirculos3.png'
import globos1 from '../assets/imagenRayas1.png'

function Delivery () {
  return (
    <div className='contDelivery'>
      <img src={globos1} alt=' ' className='globosDelivery2' />
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
