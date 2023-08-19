import rayasMedidas from '../assets/rayasMedidas.png'
import '../styles/bannerSize.css'

const BannerSizes = () => {
  return (
    <section className='banner'>
      <h2 className='title'>Conocé nuestras medidas</h2>
      <p className='textoBannerSizes'>Si tenés dudas acerca del talle ¡No dudes en consultarnos!</p>
      <img src={rayasMedidas} alt='' className='tape' />
    </section>
  )
}

export default BannerSizes
