import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List.jsx'
import List1 from './List1.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List1></List1>
    </>
  )
}

export default App
