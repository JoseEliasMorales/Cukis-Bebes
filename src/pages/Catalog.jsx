import '../styles/catalog.css'
import Items from '../components/Items'
import BannerCatalog from '../components/BannerCatalog'

const Catalog = () => {
  return (
    <section className='catalog'>
      <BannerCatalog />
      <Items />
    </section>
  )
}

export default Catalog
