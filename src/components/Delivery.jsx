import React from 'react'
import '../styles/delivery.css'

function Delivery () {
  return (
    <div className='contDelivery'>
      <div className='delivery'>
        <h3 className='titleDelivery'>Entregas personales</h3>
        <img src='../../public/img/confirmation1.png' alt='' />
      </div>
      <div className='separador' />
      <div className='delivery'>
        <h3 className='titleDelivery'>Ropa hecha a mano</h3>
        <img src='../../public/img/babyClothing1.png' alt='' />
      </div>
      <div className='separador' />
      <div className='delivery'>
        <h3 className='titleDelivery'>Compra totalmente segura</h3>
        <img src='../../public/img/box1.png' alt='' style={{ height: '262px' }} />
      </div>
    </div>
  )
}

export default Delivery
