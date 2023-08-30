import Contact from '../components/Contact'
/* import FormFooter from '../components/FormFooter' */
import '../styles/footer.css'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='containerFooter'>
        <Contact />
        {/* <FormFooter /> */}
      </div>
      <p className='rigths'>Todos los derechos reservados</p>
    </section>
  )
}

export default Footer
