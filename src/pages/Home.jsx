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
        <img src={globos1} alt='' style={{ height: '293px', marginTop: '122px', position: 'absolute', left: '0' }} />
        <img src={globos3} alt='' style={{ height: '501px', marginTop: '1185px', position: 'absolute', left: '0', zIndex: '-10' }} />
        <img src={rayas1} alt='' style={{ height: '293px', marginTop: '985px', position: 'absolute', right: '0', zIndex: '-10' }} />
        <SobreNosotros />
        <img src={globos2} alt='' style={{ height: '290px', position: 'absolute', right: '0' }} />
      </div>
      <CardsNosContainer />
      <h2 className='subtitle'>Productos en tendencia</h2>
      <Items items={itemsTrend} />
      <Link to='/catalog/nino'><button className='btnHome'>Ver catálogo completo</button></Link>
      <Delivery />
    </div>
  )
}

export default Home
