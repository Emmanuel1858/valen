import React, {useState} from 'react'
import Output from './Output'


const Greeting = () => {

    const [changedText, setChangedText] = useState(false)

    const changeTextHandler = () => {
        setChangedText(!changedText)
        
    }

  return (
      <div>
          <h2>Hello world!</h2>
          
          {!changedText && <p>It is good to see you</p>}
          {changedText && <Output>Changed!</Output>}
          <button onClick={changeTextHandler}>Change Text</button>
      </div>
  )
}

export default Greeting