import { Link } from 'react-router-dom'
import Items from '../components/Items'
import { itemsTrend } from '../products/products'
import '../styles/home.css'
import CardsNosContainer from '../containers/CardsNosContainer'
import SobreNosotros from '../components/SobreNosotros'
import Delivery from '../components/Delivery'
import BannerHome from '../components/BannerHome'
import globos1 from '../assets/imagenCirculos1.png'
import globos2 from '../assets/imagenCirculos2.png'
import globos3 from '../assets/imagenCirculos4.png'
import rayas1 from '../assets/imagenRayas2.png'

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <BannerHome />
      <div className='contGlobos'>
        <img src={globos1} alt='' className='globo1' />
        <img src={globos3} alt='' className='globo3' />
        <img src={rayas1} alt='' className='rayas1' />
        <SobreNosotros />
        <img src={globos2} alt='' className='globo2' />
      </div>
      <CardsNosContainer />
      <h2 className='subtitle'>Productos en tendencia</h2>
      <Items items={itemsTrend} />
      <Link to='/catalog/invierno'><button className='btnHome'>Ver catálogo completo</button></Link>
      <Delivery />
    </div>
  )
}

export default Home
