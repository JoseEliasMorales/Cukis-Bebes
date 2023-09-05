import '../styles/bannerAsks.css'
import ghost from '../assets/ghostAsk.png'
import flower from '../assets/imagenCirculos2.png'
const BannerAsks = () => {
  return (
    <div className='banner'>
      <div className='bannerAsks'>
        <p className='title titleAsks'>Bienvenida/o</p>
        <h2 className='title titleAsks'>¿En qué podemos ayudarte hoy?</h2>
      </div>
      {window.innerWidth > 768 &&
        <>
          <img src={ghost} alt=' ' className='fanInv' style={{ left: `${window.innerWidth > 1200 ? (window.innerWidth - 993) / 3 - 20 : (window.innerWidth - 768) / 3 + 10}px` }} />
        </>}
      <img src={flower} alt=' ' className='flower' />
    </div>
  )
}

export default BannerAsks
