import '../styles/contact.css'
import whats from '../assets/whatsFooter.png'
import insta from '../assets/instaFooter.png'
import face from '../assets/faceFooter.png'
import logo from '../assets/logoCukisBebesSmall2.png'
const Contact = () => {
  return (
    <div className='containerContact'>
      <h3 className='titleContact'>Contactame</h3>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div className='containerDateContact'>
          <div className='dateContact'>
            <img src={whats} alt='whatsapp' />
            <p>12345678910</p>
          </div>
          <div className='dateContact'>
            <img src={insta} alt='instagram' />
            <p>@Cukisbebes</p>
          </div>
          <div className='dateContact'>
            <img src={face} alt='facebook' />
            <p>Cukis bebes</p>
          </div>
        </div>
        <img src={logo} style={{ height: '211px', width: '254px' }} alt='' />
      </div>
    </div>
  )
}

export default Contact
