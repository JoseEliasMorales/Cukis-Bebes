import React from 'react'
import { questions } from '../products/asks'
import more from '../assets/more.png'
import '../styles/questions.css'
const Questions = () => {
  return (
    <div>
      {
            questions.map((question, index) => (
              <div key={index} className='ask'>
                <p>{question.ask}</p>
                <img className='more' src={more} alt='mostrar respuesta' />
              </div>
            ))
        }
    </div>
  )
}

export default Questions
