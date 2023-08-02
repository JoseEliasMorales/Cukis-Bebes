import { Link } from 'react-router-dom'
import Items from '../components/Items'
import '../styles/home.css'
import CardsNosContainer from '../containers/CardsNosContainer'

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 className='subtitle'>Sobre nosotros</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='sobreNosotros'>
          <p className='texto'>Cukis Bebes es un emprendimiento enfocado en la confección de ropa para bebes de 0 a 24 meses.</p>
          <p className='texto'>Toda nuestra ropa es realizada por nosotros, buscando dar diseños únicos y originales para cada época del año.</p>
          <p className='texto'>En nuestro cátalogo encontrarás conjuntos, prendas individuales, y accesorios para llenar el armario de tu bebé.</p>
        </div>
      </div>
      <CardsNosContainer />
      <h2 className='subtitle'>Productos en tendencia</h2>
      <Items limit={6} />
      <Link to='/catalog'><button className='btnHome'>Ver catálogo completo</button></Link>
    </div>
  )
}

export default Home
