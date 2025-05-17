import React from 'react'
import Title from '../Components/Title'
import Links from '../Components/Links'
import Button from '../Components/Button'
import { MdEmail } from 'react-icons/md'
import { BiPhone } from 'react-icons/bi'
import BntLink from '../Components/BntLink'
const Contact = () => {
  return (
    <section className='bg-background text-primary pb-20' id='contact'>
      <div className='__container'>
          <Title title='Contactez-moi' description='Parlons de vos projets !'/>
      </div>
      <div className='-mt-10'>
          <p className='text-center text-lg mb-5'>Contactez-moi sur les réseaux sociaux</p>
          <div className='flex justify-center gap-3 mb-5'>
            <BntLink href='tel:+261345705565' icon={<BiPhone />}size='xl' />
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