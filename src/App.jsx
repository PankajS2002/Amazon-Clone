import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import Home from './Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Header/>
      <Home/>
    </div>
  )
}

export default App
