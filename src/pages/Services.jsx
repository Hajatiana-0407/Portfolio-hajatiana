import React from 'react'
import Title from '../Components/Title'
import Button from '../Components/Button'
import { IoMdDownload } from 'react-icons/io'
const Services = () => {
  return (
    <div className='p-10'>
        <Title/>
        <Button label='Telecahrger' icon={<IoMdDownload/>}/>
    </div>
  )
}

export default Services