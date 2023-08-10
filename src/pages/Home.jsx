import { Link } from 'react-router-dom'
import Items from '../components/Items'
import { itemsTrend } from '../products/products'
import '../styles/home.css'
import CardsNosContainer from '../containers/CardsNosContainer'
import SobreNosotros from '../components/SobreNosotros'
import Delivery from '../components/Delivery'
import BannerHome from '../components/BannerHome'
import globos1 from '../assets/imagenGlobos1.png'
import globos2 from '../assets/imagenGlobos2.png'

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <BannerHome />
      <div className='contGlobos'>
        <img src={globos1} alt='' style={{ height: '179px' }} />
        <SobreNosotros />
        <img src={globos2} alt='' style={{ height: '221px', marginTop: '85px' }} />
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
