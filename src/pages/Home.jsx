import { Link } from 'react-router-dom'
import Items from '../components/Items'
import '../styles/home.css'

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 className='subtitle'>Productos en tendencia</h2>
      <Items limit={6} />
      <Link to='/catalog'><button className='btnHome'>Ver catálogo completo</button></Link>
    </div>
  )
}

export default Home
