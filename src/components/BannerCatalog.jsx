import '../styles/bannerCatalog.css'

const BannerCatalog = () => {
  const btns = [{ name: 'Ropa niña' }, { name: 'Ropa niño' }, { name: 'Recion nacido' }, { name: 'Invierno' }, { name: 'Verano' }]
  return (
    <section className='bannerCatalog'>
      <h2 className='titleCatalog'>Conoce nuestro amplio catálogo</h2>
      <div className='btnsCatalog'>
        {
            btns.map((btn) => (
              <button className='btnCatalog' key={btn.name}>{btn.name}</button>
            ))
        }
      </div>
    </section>
  )
}

export default BannerCatalog
