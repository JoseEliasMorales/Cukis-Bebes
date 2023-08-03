import '../styles/bannerHome.css'
import pinkForm from '../assets/pinkForm.png'
import cukisBebesForm from '../assets/cukisBebesform.png'
import lineBanner from '../assets/lineBannerHome.png'
import body from '../assets/body.png'
import title from '../assets/title.png'
const BannerHome = () => {
  return (
    <div className='bannerHome'>
      <img src={body} alt='' className='bodyBanner' />
      <img src={lineBanner} alt='' className='lineBanner' />
      <img src={pinkForm} alt='' className='pinkForm' />
      <img src={cukisBebesForm} alt='' className='cukisBebesForm' />
      <img src={title} alt='' className='titleBannerHome' />
    </div>
  )
}

export default BannerHome
