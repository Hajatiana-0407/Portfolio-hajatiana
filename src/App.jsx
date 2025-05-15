import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-background'>  
          <NavBar/>
          <Home/>
          <Services/>
      </div>
    </>
  )
}

export default App
