import { Link } from 'react-router-dom'
import Items from '../components/Items'
import trends from '../products/productsTrend.json'
import '../styles/home.css'
import CardsNosContainer from '../containers/CardsNosContainer'
import SobreNosotros from '../components/SobreNosotros'
import Delivery from '../components/delivery'
import BannerHome from '../components/BannerHome'

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <BannerHome />
      <div className='contGlobos'>
        <img src='../../public/img/imagenGlobos1.png' alt='' style={{ height: '179px' }} />
        <SobreNosotros />
        <img src='../../public/img/imagenGlobos2.png' alt='' style={{ height: '221px', marginTop: '85px' }} />
      </div>
      <CardsNosContainer />
      <h2 className='subtitle'>Productos en tendencia</h2>
      <Items items={trends} />
      <Link to='/catalog/nino'><button className='btnHome'>Ver catálogo completo</button></Link>
      <Delivery />
    </div>
  )
}

export default Home
