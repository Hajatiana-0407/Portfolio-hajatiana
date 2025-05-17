import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Project from './pages/Project'
import { useAppContext } from './context/AppContext'
import Skill from './pages/Skill'
import Contact from './pages/Contact'
import Button from './Components/Button'
import { FaArrowUp } from 'react-icons/fa'
import Footer from './Components/Footer'

function App() {
  const { activeOnglet, setActiveOnglet , isDark   } = useAppContext();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveOnglet(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [setActiveOnglet]);


  


  return (
    <>
      <div data-theme={ isDark === true  ? 'dark' : '' } className='accueil-bg bg-fixed min-h-screen'>
        <div className='font-body'>
          <NavBar />
          <Home />
          <Service />
          <Project />
          <Skill />
          <About />
          <Contact />
          <Footer />
        </div>

        
      </div>
    </>
  )
}

export default App
