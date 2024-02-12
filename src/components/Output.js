import React, { useState } from 'react'
import './Output.css'

const Output = () => {


  const phrases = [
    'No',
    'Lol, I see what you did there',
    'Accept na 🥺',
    'Are you sure?',
    'Really sure',
    'babe na 🥺',
    'You know I love you 🥺',
    'Please my baby 🥺',
    `Don't do this to me`,
    `I'm gonna cry 😭...`,
    `You're really breaking my heart`,
    ''
  ]

  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)

  const yesButtonSize = noCount * 20 + 16

  const handleNoClick = () => {
    setNoCount(noCount + 1)
  }

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <div className='valContainer' >
      <div>

        {
          yesPressed ? (
            <>
              <img className='img' src='https://media.tenor.com/gUiu1zyxfzYAAAAj/bear-kiss-bear-kisses.gif'
                alt='Bears Kising' />
              <h1>Yayyyyyy!!!!!</h1>
            </>
          )
            :
            (
              <>
                <img className='img' src='https://media.tenor.com/EQ1XagNtbr8AAAAM/love-you-forever.gif' alt='bear asking' />
                <h3>Do you love me?</h3>
                <div className='buttonContainer' >
                  <button
                    className='yesButton'
                    style={{ fontSize: yesButtonSize }}
                    onClick={() => setYesPressed(true)} >
                    Yes
                  </button>
                  <button onClick={handleNoClick} className='noButton' >{getNoButtonText()}</button>
                </div>

              </>
            )
        }
      </div>
    </div>
  )
}

export default Output