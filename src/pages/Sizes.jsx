import React from 'react'
import BannerSizes from '../components/BannerSizes'
import '../styles/sizes.css'
import CardsSizesContainer from '../containers/CardsSizesContainer'

const Sizes = () => {
  return (
    <section className='sectionSizes'>
      <BannerSizes />
      <p className='textoSizes'>Tené en cuenta que la ropita siempre puede tomar un poco después del primer lavado, normalmente alrededor de 1cm de largo.</p>
      <CardsSizesContainer />
    </section>
  )
}

export default Sizes
