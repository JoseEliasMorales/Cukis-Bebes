import '../styles/bannerHome.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'

const BannerHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className='bannerHome' src={banner1} alt='Cukis bebes' />
        </div>
        <div>
          <img className='bannerHome' src={banner2} alt='Conoce nuestros nuevos modelos' />
        </div>
        <div>
          <img className='bannerHome' src={banner3} alt='Nueva temporada' />
        </div>
      </Slider>
    </div>
  )
}

export default BannerHome
