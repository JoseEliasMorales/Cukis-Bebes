import '../styles/bannerAsks.css'
import giraffe from '../assets/giraffe.png'
const BannerAsks = () => {
  return (
    <div className='banner'>
      <div className='bannerAsks'>
        <h2 className='title titleAsks'>Bienvenida/o, ¿En qué podemos ayudarte hoy?</h2>
        <div className='containerInputBtn'>
          <input type='text' className='input inputBannerAsks' placeholder='Escribí tu pregunta...' />
          <button className='btnBannerAsks'>Buscar</button>
        </div>
      </div>
      <img src={giraffe} alt=' ' className='tape' />
    </div>
  )
}

export default BannerAsks
