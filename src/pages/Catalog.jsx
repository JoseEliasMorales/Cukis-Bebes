import '../styles/catalog.css'
import BannerCatalog from '../components/BannerCatalog'
import { Outlet } from 'react-router-dom'

const Catalog = () => {
  return (
    <section className='catalog'>
      <BannerCatalog />
      <Outlet />
    </section>
  )
}

export default Catalog
