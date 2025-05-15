import React from 'react'
import { CiMobile3 } from 'react-icons/ci'
import { FaLaptopCode } from 'react-icons/fa'
import { GrServers } from 'react-icons/gr'
import Title from '../Components/Title'
const Service = () => {
    return (
        <section className='bg-background' id='services'>
            <div className='__container'>
                {/* <Title title='Mes Services'/> */}
                <div className='flex justify-evenly flex-wrap gap-5 py-10'>
                    <div className='w-75  flex flex-col justify-center items-center gap-4 text-primary'>
                        <div className='w-35 h-35 border rounded-full flex justify-center items-center text-6xl '>
                            <CiMobile3 />
                        </div>
                        <div className='w-full text-cneter font-heading font-bold text-center text-xl'>
                            <h3>Développement  mobiles</h3>
                        </div>
                        <div className='text-md text-center text-secondary font-body'>
                            Création d'applications mobiles modernes, adaptatives et axées sur la performance.
                        </div>
                    </div>
                    <div className='w-75  flex flex-col justify-center items-center gap-4 text-primary'>
                        <div className='w-35 h-35 border rounded-full flex justify-center items-center text-6xl '>
                            <FaLaptopCode />
                        </div>
                        <div className='w-full text-cneter font-heading font-bold text-center text-xl'>
                            <h3>Développement Web</h3>
                        </div>
                        <div className='text-md text-center text-secondary font-body'>
                            Création d'interfaces web actuelles, adaptatives et axées sur la performance.
                        </div>
                    </div>
                    <div className='w-75  flex flex-col justify-center items-center gap-4 text-primary'>
                        <div className='w-35 h-35 border rounded-full flex justify-center items-center text-6xl '>
                            <GrServers />
                        </div>
                        <div className='w-full text-cneter font-heading font-bold text-center text-xl'>
                            <h3>Développement Backend</h3>
                        </div>
                        <div className='text-md text-center text-secondary font-body'>
                            Conception d'architectures back-end robustes et sécurisées.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service