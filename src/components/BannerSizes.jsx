import tape from '../assets/tape.png'
import '../styles/bannerSize.css'

const BannerSizes = () => {
  return (
    <section className='banner'>
      <h2 className='title'>Conocé nuestras medidas</h2>
      <img src={tape} alt='' className='tape' />
    </section>
  )
}

export default BannerSizes
