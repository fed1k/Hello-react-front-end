import { useState } from 'react'
import './App.css'
import Greeting from './Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Greeting />
    </div>
  )
}

export default App
