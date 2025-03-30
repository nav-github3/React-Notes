import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button.jsx'




//click event = An interaction when a user click on sepecefic element . We can respond to clicks by passing a callback to the onClick event Handler 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button></Button>
    </>
  )
}

export default App
