import '../styles/bannerCatalog.css'
import fox from '../assets/fox.png'

const BannerCatalog = () => {
  const btns = [{ name: 'Ropa niña' }, { name: 'Ropa niño' }, { name: 'Recion nacido' }, { name: 'Invierno' }, { name: 'Verano' }]
  return (
    <section className='banner'>
      <h2 className='title'>Conoce nuestro amplio catálogo</h2>
      <div className='btnsCatalog'>
        {
            btns.map((btn) => (
              <button className='btnCatalog' key={btn.name}>{btn.name}</button>
            ))
        }
      </div>
      <img src={fox} alt=' ' className='fox' />
    </section>
  )
}

export default BannerCatalog
