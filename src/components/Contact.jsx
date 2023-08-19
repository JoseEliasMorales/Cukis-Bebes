import '../styles/contact.css'
import whats from '../assets/whatsFooter.png'
import insta from '../assets/instaFooter.png'
import face from '../assets/faceFooter.png'
import logo from '../assets/logoCukisBebesSmall2.png'
const Contact = () => {
  return (
    <div className='containerContact'>
      <h3 className='titleContact'>Contactame</h3>
      <div className='divDisplayContact'>
        <div className='containerDateContact'>
          <div className='dateContact'>
            <img src={whats} alt='whatsapp' className='imgContact' />
            <p className='textoContact'>12345678910</p>
          </div>
          <div className='dateContact'>
            <img src={insta} alt='instagram' className='imgContact' />
            <p className='textoContact'>@Cukisbebes</p>
          </div>
          <div className='dateContact'>
            <img src={face} alt='facebook' className='imgContact' />
            <p className='textoContact'>Cukis bebes</p>
          </div>
        </div>
        <img src={logo} alt='' className='logoContact' />
      </div>
    </div>
  )
}

export default Contact
