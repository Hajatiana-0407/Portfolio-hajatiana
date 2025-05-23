import { useEffect } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import { useAppContext } from './context/AppContext'
import PortfolioPages from './pages/PortfolioPages'
import { Route, Routes } from 'react-router-dom'
import ProjetDetails from './pages/ProjetDetails'
import ScrollToHash from "./Components/scrollTohash"
import NotFound from './pages/NotFound'
function App() {

  const {  isDark } = useAppContext();

  return (
    <>
      <div data-theme={isDark === true ? 'dark' : ''} className='accueil-bg bg-fixed min-h-screen'>
        <div className='font-body'>
          <NavBar />
          <ScrollToHash />
          <Routes>
            <Route path='/' element={<PortfolioPages />} />
            <Route path='/projets/:id' element={<ProjetDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>


      </div>
    </>
  )
}

export default App
