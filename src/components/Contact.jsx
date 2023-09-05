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
          <a href='https://wa.me/c/5493516001513' target='_blank' className='dateContact' rel='noreferrer'>
            <img src={whats} alt='whatsapp' className='imgContact' />
            <p className='textoContact'>+54 9 351 600-1513</p>
          </a>
          <a href='https://www.instagram.com/cukis.bebes/' target='_blank' className='dateContact' rel='noreferrer'>
            <img src={insta} alt='instagram' className='imgContact' />
            <p className='textoContact'>@Cukisbebes</p>
          </a>
          <a href='https://www.facebook.com/profile.php?id=100073351473514' target='_blank' className='dateContact' rel='noreferrer'>
            <img src={face} alt='facebook' className='imgContact' />
            <p className='textoContact'>Cukis bebes</p>
          </a>
        </div>
        <img src={logo} alt='' className='logoContact' />
      </div>
    </div>
  )
}

export default Contact
