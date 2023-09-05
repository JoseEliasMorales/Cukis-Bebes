import React, { useState } from 'react'
import { questions } from '../products/asks'
import more from '../assets/more.png'
import '../styles/questions.css'
const Questions = () => {
  const [prevIndex, setPrevIndex] = useState('11')
  const [indexAsk, setIndexAsk] = useState('10')

  function activarAsk () {
    if (prevIndex !== indexAsk) {
      return 'activeAsk'
    }
  }

  function activarMore () {
    if (prevIndex === indexAsk) {
      cambiarIndex()
    } else {
      return 'activeMore'
    }
  }

  function cambiarIndex () {
    setPrevIndex(11)
    setIndexAsk(11)
  }

  return (
    <div className='asks'>
      {
            questions.map((question, index) => (
              <div key={index} className={`contAsk ${indexAsk === index ? activarAsk() : 'hideAsk'}`}>
                <div className='ask'>
                  <p className='textoAsk'>{question.ask}</p>
                  <img
                    className={`more ${indexAsk === index ? activarMore() : 'hideMore'}`} src={more} alt='mostrar respuesta' onClick={() => {
                      setPrevIndex(indexAsk)
                      setIndexAsk(index)
                    }}
                  />
                </div>
                <p>{question.response}</p>
              </div>
            ))
        }
    </div>
  )
}

export default Questions
