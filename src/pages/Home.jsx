import React from 'react'
import {  FaHandSparkles } from 'react-icons/fa'
import Button from '../Components/Button'
import { IoMdDownload } from 'react-icons/io'
import { IoIosMailUnread } from 'react-icons/io'
const Home = () => {
  return (
    <section className={`text-primary `} id='accueil' >
      <div className='bg-background/85  py-28'>
        <div className='__container h-full'>
          <div className='w-full  flex flex-col items-center   gap-8'>
            <div className='bg-linear-to-r  from-background  to-gray-600 w-[max-content] p-2 '>
              <h3 className='flex items-center gap-1'>
                <span>Bienvenue sur mon portfolio</span>
                <FaHandSparkles  />
              </h3>
            </div>
            <div>
              <div className='text-center  font-bold font-heading text-primary '>
                <h2 className='text-3xl md:text-4xl '>Hajatiana</h2>
                <h2 className='text-3xl md:text-4xl '>RASOLONDRAIBE</h2>
              </div>
              <div className='text-2xl text-primary text-center'>
                <h2>Développeur <span className='text-theme'>Fullstack  Web </span>   & <span className='text-theme'> Mobile</span></h2>
              </div>
            </div>
            <div className='w-50 rounded-full h-1 bg-theme'></div>
            <div className='text-secondary text-base   w-full md:w-5/6 lg:w-3/5 text-center'>
              <p>Je conçois des applications web, mobiles et logicielles modernes, alliant performance, clarté du code et expérience utilisateur fluide.</p>
            </div>
            <div className='flex justify-center gap-5'>
              <Button label='Me contacter' href='#contact' icon={<IoIosMailUnread />} iscolored />
              <Button download href='../assets/images/RASOLONDRAIBE_Hajatiana.pdf' label='Télecharger mon cv' icon={<IoMdDownload />} iscolored />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



export default Home