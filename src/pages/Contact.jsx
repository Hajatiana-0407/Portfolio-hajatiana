import React from 'react'
import Title from '../Components/Title'
import Links from '../Components/Links'
import Button from '../Components/Button'
import { MdEmail } from 'react-icons/md'
import { BiPhone } from 'react-icons/bi'
const Contact = () => {
  return (
    <section className='bg-background text-primary pb-10' id='contact'>
      <div className='__container'>
          <Title title='Contactez-moi' description='Parlons de vos projets !'/>
      </div>
      <div className='-mt-10'>
          <p className='text-center text-lg mb-5'>Contactez-moi sur les réseaux sociaux</p>
          <div className='flex justify-center gap-3 mb-5'>
            <a href="tel:+261345705565" className={`text-primary w-12 h-12 flex justify-center items-center bg-theme/10  rounded-full border-1 border-secondary relative hover:text-background hover:bg-primary hover:shadow-md hover:shadow-theme transition ease-in hover:border-0`}>
              <BiPhone />
            </a>
            <Links size='xl' />
          </div>
          <p className='text-center text-lg mb-5'>Ou contacte-moi directement par mail</p>
          <div className='flex justify-center'>
            <Button href='mailto:hajatianarasolondraibe0407@gmail.com' label='Envoyer un message' icon={<MdEmail/>}  iscolored/>
          </div>
      </div>
    </section>
  )
}

export default Contact