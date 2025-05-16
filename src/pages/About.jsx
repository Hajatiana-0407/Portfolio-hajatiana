import React from 'react'
import Title from '../Components/Title'
import Links from '../Components/Links'
const About = () => {
  return (
    <section className='bg-about' id='a-propos'>
      <div className='bg-background/85'>
        <div className='__container pb-20'>
          <div className='flex flex-col justify-center items-center '>
            <Title title='À propos de moi' description='Faisons connaissance !' />
            <div className='bg-gray-300 w-40 h-40 mb-5  rounded-full bg-profil shadow shadow-theme/50'></div>
            <div className=' w-full md:w-5/6 lg:w-3/5  text-primary text-md text-center flex flex-col gap-3'>
              <p>
                Moi c’est Hajatiana, développeur passionné de technologies et d’expériences utilisateurs.J’aime transformer des idées en applications concrètes, utiles et bien pensées. Que ce soit pour le web ou le mobile, je m’efforce toujours de produire un code propre, maintenable et efficace.
              </p>
              <p>
                J’ai eu la chance de travailler sur des projets variés.
              </p>
              <p>
                En dehors du code, je suis quelqu’un de curieux, toujours prêt à apprendre et à relever de nouveaux défis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About