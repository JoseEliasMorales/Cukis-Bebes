import '../styles/navbar.css'
import instagram from '../assets/instagramNav.png'
import { Link } from 'react-router-dom'

const menu = [{ title: 'Inicio', path: '/' }, { title: 'Catálogo', path: '/catalog' }, { title: 'Tabla de medidas', path: '/sizes' }, { title: 'Preguntas frecuentes', path: '/asks' }]
const Navbar = () => {
  return (
    <div className='navbar'>
      <div>Cukis Bebes</div>
      <div className='menuList'>
        {
            menu.map(li => (
              <Link to={li.path} className='itemMenu' key={li.title}>{li.title}</Link>
            ))
        }
      </div>
      <img src={instagram} alt='instagram Cukis Bebes' />
    </div>
  )
}

export default Navbar
