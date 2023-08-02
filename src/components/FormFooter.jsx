import { useState } from 'react'
import '../styles/formFooter.css'

const FormFooter = () => {
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Nombre:', name)
    console.log('Teléfono:', tel)
    console.log('Correo electrónico:', email)
    console.log('Mensaje:', message)
  }
  return (
    <div className='formFooter'>
      <h3 className='titleForm'>¿Necesitas más información?</h3>
      <form className='form' onSubmit={handleSubmit}>
        <div className='nameTel'>
          <input
            className='input inputName'
            placeholder='Nombre...'
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='input inputTel'
            placeholder='Teléfono...'
            defaultValue={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <input
          className='input'
          placeholder='Correo electrónico...'
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='input'
          placeholder='Mensaje...'
          defaultValue={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className='containerBtnForm'>
          <button className='btnForm' type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default FormFooter
