import React, { useEffect } from 'react'
import { Projets } from '../Utils/Datas'
import { NavLink, useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import Button from '../Components/Button'
import { MdOutlineDescription } from 'react-icons/md'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ProjetDetails = () => {
    const { isDark, setActiveOnglet } = useAppContext()
    const { id } = useParams();
    const projetId = id - 1;
    const projet = Projets[projetId]

    useEffect(() => {
        setActiveOnglet('projets');
    }, [])

    return (
        <section className='bg-background min-h-screen ' id='projets'>
            <div className='__container text-secondary pt-20 pb-10'>

                <div className={`w-full h-80 rounded relative overflow-hidden`} style={{
                    backgroundImage: `url(../${projet.image})`
                }}>
                    <div className='absolute top-0 left-0 right-0 bottom-0 backdrop-blur-[1.5px] bg-linear-to-r from-primary/30 via-transparent to-transparent  flex justify-start items-center p-5  '>
                        <div className='text-xl text-primary  bg-card border-ring border-2 rounded-full  shadow-xl shadow-background/20 font-heading py-2 px-3'>
                            {projet.logo && (
                                isDark ? <img src={`../${projet.logo.dark}`} alt="logo" className='h-10' />
                                    : <img src={`../${projet.logo.light}`} alt="logo" className='h-10' />
                            )
                            }
                            {!projet.logo && projet.title}
                        </div>
                    </div>
                    {id > 1 &&
                        <NavLink
                            to={`/projets/${parseInt(id) - 1}`}
                            className='fixed bottom-1/2 left-4 xl:left-[calc((100%-1250px)/2+16px)]'
                        >
                            <Button label='' type='button' iscolored icon={<FaChevronLeft />} />
                        </NavLink>
                    }
                    {id < Projets.length &&
                        <NavLink
                            to={`/projets/${parseInt(id) + 1}`}
                            className='fixed bottom-1/2 right-4 xl:right-[calc((100%-1250px)/2+16px)]'
                        >
                            <Button label='' type='button' iscolored icon={<FaChevronRight />} />
                        </NavLink>
                    }

                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2  w-full my-2 rounded overflow-hidden'>
                    <div className='bg-card border-ring border p-2  md:col-span-2'>
                        <div className='text-theme text-xl pb-2 font-heading'>
                            <h2>Détails</h2>
                        </div>
                        <div className='text-primary text-base pb-2'>
                            <p>{projet.description}</p>
                        </div>
                        <div className='text-primary'>
                            {
                                projet.link &&
                                <a href={ projet.link } target='_blank' className='text-theme underline'>Voire le projet →</a>
                            }
                        </div>
                    </div>
                    <div className='bg-card border-ring border p-2 '>
                        <div className='text-theme text-xl pb-2 font-heading'>
                            <h2>Téchnologie</h2>
                        </div>
                        <div>
                            <ul>
                                {projet.technos.map((techno, key) => (
                                    <li key={key} className='text-base text-primary font-body'>
                                        - {techno.nom}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-card border-ring border p-2 rounded'>
                    <div className='text-theme text-xl pb-2 font-heading'>
                        <h2 className='flex items-center gap-1'><MdOutlineDescription /> Déscription</h2>
                    </div>
                    <div >
                        {projet.details}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjetDetails