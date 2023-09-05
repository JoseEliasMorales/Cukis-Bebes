import rayasMedidas from '../assets/rayasMedidas.png'
import '../styles/bannerSize.css'
import fanSize from '../assets/fanSize.png'

const BannerSizes = () => {
  return (
    <section className='banner'>
      <h2 className='title'>Conocé nuestras medidas</h2>
      <p className='textoBannerSizes'>Si tenés dudas acerca del talle ¡No dudes en consultarnos!</p>
      <img src={rayasMedidas} alt='' className='lines' />
      {window.innerWidth > 768 &&
        <>
          <img src={fanSize} alt='Imagen fantasma del banner' className='fanVer' style={{ right: `${window.innerWidth > 1200 ? (window.innerWidth - 993) / 3 - 20 : (window.innerWidth - 768) / 3 + 10}px` }} />
        </>}
    </section>
  )
}

export default BannerSizes
