import '../styles/bannerAsks.css'
import ghost from '../assets/ghostAsk.png'
import flower from '../assets/imagenCirculos2.png'
const BannerAsks = () => {
  return (
    <div className='banner'>
      <div className='bannerAsks'>
        <h2 className='title titleAsks'>Bienvenida/o, ¿En qué podemos ayudarte hoy?</h2>
      </div>
      <img src={ghost} alt=' ' className='tape' />
      <img src={flower} alt=' ' className='flower' />
    </div>
  )
}

export default BannerAsks
