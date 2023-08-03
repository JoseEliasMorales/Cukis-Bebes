import React from 'react'
import '../styles/sobreNosotros.css'

function SobreNosotros () {
  return (
    <div>
      <h2 className='subtitle' style={{ marginTop: '40px' }}>Sobre nosotros</h2>
      <div className='contSobreNosotros'>
        <div className='sobreNosotros'>
          <p className='texto'>Cukis Bebes es un emprendimiento enfocado en la confección de ropa para bebes de 0 a 24 meses.</p>
          <p className='texto'>Toda nuestra ropa es realizada por nosotros, buscando dar diseños únicos y originales para cada época del año.</p>
          <p className='texto'>En nuestro cátalogo encontrarás conjuntos, prendas individuales, y accesorios para llenar el armario de tu bebé.</p>
        </div>
      </div>
    </div>
  )
}

export default SobreNosotros
