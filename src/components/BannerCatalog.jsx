import '../styles/bannerCatalog.css'
import globoInvierno from '../assets/imagenCirculos2.png'
import globoVerano from '../assets/globoVerano.png'
import fanVerano from '../assets/fantasmaVerano.png'
import fanInvierno from '../assets/fantasmaInvierno.png'
import fanMedia from '../assets/fantasmaMedia.png'
import globoMedia from '../assets/globoMedia.png'
import rayasMedia from '../assets/rayasMedia.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const BannerCatalog = () => {
  const [estacion, setEstacion] = useState('Verano')
  const [botonActivo, setBotonActivo] = useState('Verano')
  const btns = [{ name: 'Invierno', path: '/catalog/invierno' }, { name: 'Verano', path: '/catalog/verano' }, { name: 'Media estación', path: '/catalog/media-estacion' }]
  return (
    <section className='banner'>
      <h2 className='title'>Conoce nuestro amplio catálogo</h2>
      <div className='btnsCatalog'>
        {
            btns.map((btn) => (
              <Link to={btn.path} key={btn.name} onClick={() => { setEstacion(btn.name); setBotonActivo(btn.name) }}>
                <button className={`btnCatalog ${botonActivo === btn.name ? 'active' : ''}`} key={btn.name}>
                  {btn.name}
                </button>
              </Link>
            ))
        }
      </div>

      {estacion === 'Verano' &&
        <>
          <img src={globoVerano} alt=' ' className='globoVerano' />
        </>}
      {estacion === 'Invierno' &&
        <>
          <img src={globoInvierno} alt=' ' className='globoCatalog' />
        </>}
      {estacion === 'Media estación' &&
        <>
          <img src={globoMedia} alt=' ' className='globoMedia' />
        </>}
      {window.innerWidth > 768 &&
        <>
          {estacion === 'Verano' &&
            <>
              <img src={fanVerano} alt=' ' className='fanVer' style={{ right: `${window.innerWidth > 1200 ? (window.innerWidth - 993) / 3 - 20 : (window.innerWidth - 768) / 3 + 10}px` }} />
            </>}
          {estacion === 'Invierno' &&
            <>
              <img src={fanInvierno} alt=' ' className='fanInv' style={{ left: `${window.innerWidth > 1200 ? (window.innerWidth - 993) / 3 - 20 : (window.innerWidth - 768) / 3 + 10}px` }} />
            </>}
          {estacion === 'Media estación' &&
            <>
              <img src={fanMedia} alt=' ' className='fanMedia' style={{ left: `${window.innerWidth > 1200 ? (window.innerWidth - 993) / 3 - 20 : (window.innerWidth - 768) / 3 + 10}px` }} />
            </>}
        </>}
      {estacion === 'Media estación' &&
        <>
          <img src={rayasMedia} alt=' ' className='rayasMedia' />
        </>}
    </section>
  )
}

export default BannerCatalog
