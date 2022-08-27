import './App.css'
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { thunkReducer } from './redux/reducer'
import Greeting from './Greeting'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(thunkReducer())
  }, [])

  return (
    <div className="App">
      <Greeting />
    </div>
  )
}

export default App
