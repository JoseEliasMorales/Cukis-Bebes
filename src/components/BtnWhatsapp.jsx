import React, { useState } from 'react'
import whatsBtn from '../assets/whatsBtn.png'
import whatsBtnTransparent from '../assets/whatsBtnTransparent.png'

const BtnWhatsapp = () => {
  const [hovered, setHovered] = useState(false)

  const handleHover = () => {
    setHovered(!hovered)
  }
  return (
    <a href='https://wa.me/c/5493516001513' target='_blank' className='btnWhats' rel='noreferrer' onMouseEnter={handleHover} onMouseLeave={handleHover} rel='noreferrer'>
      <img src={hovered ? whatsBtn : whatsBtnTransparent} alt='' />
      Consultar Precio
    </a>
  )
}

export default BtnWhatsapp
