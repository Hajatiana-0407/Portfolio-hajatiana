import React from 'react'
import { FaDownload, FaHandSparkles } from 'react-icons/fa'
import { motion } from 'motion/react'

const Home = () => {
  const containervariante = {
    'initial': { x: -10, opacity: 0 },
    'final': {
      x: 0, opacity: 1, transition: {
        staggerChildren: 0.1
      }
    },
  }

  const childVariante = {
    'initial': { x: -10, opacity: 0 },
    'final': {
      x: 0, opacity: 1, transition: {
        duration: 0.2
      }
    },
  }


  return (
    <section className={`text-white min-h-screen relative bg-accueil`} id='home' >
    </section>
  )
}



export default Home