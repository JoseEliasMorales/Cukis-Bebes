import '../styles/navbar.css'
import instagram from '../assets/instagramNav.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const menu = [{ title: 'Inicio', path: '/' }, { title: 'Catálogo', path: '/catalog/verano' }, { title: 'Tabla de medidas', path: '/sizes' }, { title: 'Preguntas frecuentes', path: '/asks' }]
const Navbar = () => {
  const [abiertoCerrado, setAbiertoCerrado] = useState('cerrado')
  const [enlaceActivo, setEnlaceActivo] = useState('/')
  console.log(abiertoCerrado)
  return (
    <div className='navbar'>
      <button type='button' className='buttonNav' onClick={() => { abiertoCerrado === 'cerrado' ? setAbiertoCerrado('abierto') : setAbiertoCerrado('cerrado') }}>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none' className='svgButton'>
          <g clip-path='url(#clip0_304_462)'>
            <path d='M16.6667 14.5834C16.9877 14.5836 17.2964 14.7072 17.5287 14.9288C17.761 15.1503 17.8992 15.4527 17.9146 15.7733C17.9301 16.094 17.8216 16.4083 17.6116 16.6511C17.4016 16.8939 17.1062 17.0466 16.7867 17.0776L16.6667 17.0834H3.33337C3.01236 17.0833 2.70371 16.9596 2.47139 16.7381C2.23906 16.5165 2.10086 16.2141 2.08544 15.8935C2.07001 15.5728 2.17853 15.2586 2.38852 15.0157C2.59851 14.7729 2.89386 14.6202 3.21337 14.5892L3.33337 14.5834H16.6667ZM16.6667 8.75008C16.9982 8.75008 17.3162 8.88178 17.5506 9.1162C17.785 9.35062 17.9167 9.66856 17.9167 10.0001C17.9167 10.3316 17.785 10.6495 17.5506 10.884C17.3162 11.1184 16.9982 11.2501 16.6667 11.2501H3.33337C3.00185 11.2501 2.68391 11.1184 2.44949 10.884C2.21507 10.6495 2.08337 10.3316 2.08337 10.0001C2.08337 9.66856 2.21507 9.35062 2.44949 9.1162C2.68391 8.88178 3.00185 8.75008 3.33337 8.75008H16.6667ZM16.6667 2.91675C16.9982 2.91675 17.3162 3.04844 17.5506 3.28286C17.785 3.51729 17.9167 3.83523 17.9167 4.16675C17.9167 4.49827 17.785 4.81621 17.5506 5.05063C17.3162 5.28505 16.9982 5.41675 16.6667 5.41675H3.33337C3.00185 5.41675 2.68391 5.28505 2.44949 5.05063C2.21507 4.81621 2.08337 4.49827 2.08337 4.16675C2.08337 3.83523 2.21507 3.51729 2.44949 3.28286C2.68391 3.04844 3.00185 2.91675 3.33337 2.91675H16.6667Z' fill='#ACB1D6' />
          </g>
          <defs>
            <clipPath id='clip0_304_462'>
              <rect width='20' height='20' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className='contName'>Cukis Bebés</div>
      <div className='menuList'>
        {
              menu.map(li => (
                <Link
                  to={li.path}
                  className={`itemMenu ${enlaceActivo === li.path ? 'active' : ''}`}
                  key={li.title}
                  onClick={() => setEnlaceActivo(li.path)}
                >
                  {li.title}
                </Link>
              ))
            }
      </div>
      <div className={`${abiertoCerrado === 'cerrado' ? 'menuListMobile cerrado' : 'menuListMobile abierto'}`}>
        {
            menu.map(li => (
              <Link to={li.path} className='itemMenu' key={li.title}>{li.title}</Link>
            ))
          }
      </div>
      <img src={instagram} alt='instagram Cukis Bebes' className='instagramHeader' />
    </div>
  )
}

export default Navbar
