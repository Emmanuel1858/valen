import { useState } from 'react'
// import Greeting from './components/Greeting'
// import Splitscreen from './components/Splitscreen'
import Button from './components/Button'
import Container from './components/Container'
import MiddleComponent from './components/MiddleComponent'
import Navbar from './components/Navbar'
import Person from './components/Person'
import Output from './components/Output'

// const LeftHandCompanent = () => {
//   return <h1>Left</h1>
// }

// const RightHandCompanent = () => {
//   return <h1>Right</h1>
// }

// Props is any data that you pass from parent down to child.
// Props can b of any data type

const name = 'Dabo'

const age = 22

const links = ['Home', 'About', 'Contact', 'Products']

const greetUser = () => {
  console.log('I greet u Boss')
}

const users = [
  {
    id: 1,
    name: 'Dabo',
    courseOfStudy: 'Physics'
  },
  {
    id: 2,
    name: 'Samuel',
    courseOfStudy: 'Economics'
  },
  {
    id: 3,
    name: 'Timi',
    courseOfStudy: 'Political Science'
  },
]

const person = {
  name: 'Chinyere Ekwe',
  status: 'NYSC Madam',
  gender: 'female',
  character: 'Show Corpers fake love'
}



const App = () => {

  const [count, setCount] = useState(0)

  // increase
  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }


  }

  // useState('Anything inside here')  => is the initial value of ur state. It can store any datatype
  // useState(false)
  // useState(0)
  // useState('timi')
  // useState({
  //   name: 'sam'
  // })
  // useState([])

  // count  => is a variable that is pointing to the useState
  // count === wahtever is inside the useState()

  // setCount => it is a function that updates the initial value
  // setCount updates wateevr is inside useState()





  return (

    <Output />
  )
}

export default App


// < Splitscreen leftWeight = { 1} rightWeight = { 3} >
//     <LeftHandCompanent />
//     <RightHandCompanent />
//   </ >