import '../styles/bannerCatalog.css'
import fox from '../assets/fox.png'
import { Link } from 'react-router-dom'

const BannerCatalog = () => {
  const btns = [{ name: 'Ropa niño', path: '/catalog/nino' }, { name: 'Ropa niña', path: '/catalog/nina' }, { name: 'Recion nacido' }, { name: 'Invierno' }, { name: 'Verano' }]
  return (
    <section className='banner'>
      <h2 className='title'>Conoce nuestro amplio catálogo</h2>
      <div className='btnsCatalog'>
        {
            btns.map((btn) => (
              <Link to={btn.path} key={btn.name}>
                <button className='btnCatalog' key={btn.name}>{btn.name}</button>
              </Link>
            ))
        }
      </div>
      <img src={fox} alt=' ' className='fox' />
    </section>
  )
}

export default BannerCatalog
