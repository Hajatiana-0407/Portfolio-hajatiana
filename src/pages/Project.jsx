import React from 'react'
import Title from '../Components/Title'
import { Projets } from '../Utils/Datas'
import Button from '../Components/Button'
import { useAppContext } from '../context/AppContext'
import { FaEye } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
const Project = () => {
    const { isDark } = useAppContext();


    return (
        <section className='bg-background' id='projets'>
            <div className='__container pb-20'>
                <Title title='Mes Projets' description='Quelques projets dont je suis fier' />
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 '>
                    {
                        Projets.map((projet, key) => (
                            <div key={projet.title} className='card relative p-3 group hover:scale-102 transition-all duration-200'>
                                <div className='absolute flex  justify-center items-center top-0 left-0 right-0 backdrop-blur-[1.5px] bg-theme/25 h-0 lg:group-hover:h-full   z-10 transition-all duration-200'>
                                    <div className='gap-3 hidden lg:group-hover:flex transition-all'>
                                        <NavLink to={`projets/${projet.id}`}>
                                            <Button type='button' label='Détails' icon={<FaEye />} />
                                        </NavLink>
                                        {
                                            projet.gitHubLink &&

                                        <Button href={ projet.gitHubLink  } target='_blank' label='Dépôt' icon={<BsGithub />} />
                                        }
                                    </div>
                                </div>
                                <div className='relative bg-secondary border-0 rounded-md overflow-hidden w-full h-45'>
                                    <div className='relative bg-secondary border-0 rounded-md overflow-hidden w-full h-45'>
                                        <div className={` group-hover:scale-105 transition-all duration-500 bg-center bg-cover bg-no-repeat absolute top-0 left-0 right-0 bottom-0`} style={{
                                            backgroundImage: `url(${projet.image})`
                                        }}>
                                        </div>
                                        <div className='absolute top-1 left-1 text-base bg-card border border-ring text-primary rounded-full p-1 flex justify-center items-center z-15
                                        '>
                                            {projet.logo && (
                                                isDark ? <img src={projet.logo.dark} alt="logo" className='h-10' />
                                                    : <img src={projet.logo.light} alt="logo" className='h-10' />
                                            )
                                            }
                                            {!projet.logo && projet.title}
                                        </div>
                                        <div className='absolute top-1 right-1 text-base lg:hidden rounded-full p-1 flex justify-center items-center z-15
                                        '>
                                            <NavLink to={`projets/${projet.id}`} className={'mr-1'}>
                                                <Button type='button' label='' icon={<FaEye />} />
                                            </NavLink>
                                            {
                                                projet.gitHubLink &&

                                            <Button label='' href={ projet.gitHubLink } icon={<BsGithub />} />
                                            }
                                        </div>

                                    </div>
                                </div>
                                <div className='text-left'>
                                    <div className='text-2xl text-primary font-heading my-3'>

                                        <h3>{projet.title} </h3>
                                    </div>
                                    <div className='text-secondary   text-base mb-3'>
                                        <p>
                                            {projet.description}
                                        </p>
                                    </div>
                                    <div className='flex flex-wrap gap-2 text-sm text-secondary font-body '>
                                        {projet.technos.map((techno, key) => (
                                            <div key={key} className='flex items-center gap-1 p-2 rounded-full border-theme shadow-sm shadow-theme/50 border'>
                                                {techno.icon}
                                                {techno.nom}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Project