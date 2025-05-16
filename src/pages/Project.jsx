import React from 'react'
import Title from '../Components/Title'
import { FaBootstrap,  FaSymfony } from 'react-icons/fa'
import { SiCodeigniter, SiJquery } from 'react-icons/si'
import { DiMysql } from 'react-icons/di'

import softio from '../assets/images/projets/softio_img.png'
import hauteZaune from '../assets/images/projets/hautezone.png'
import getstionEcole from '../assets/images/projets/gestionEcole.png'

const Project = () => {


    const projets = [
        {
            title: 'Softio-app',
            description: 'Un logiciel qui permet de suivre les stocks en temps réel, de gérer les ventes, les approvisionnements et bien d’autres fonctionnalités essentielles à la bonne gestion d’un commerce.',
            technos: [
                <><FaBootstrap />Bootstrap</>,
                <><SiJquery />JQuery</>,
                <><SiCodeigniter />Codeigniter</>,
                <><DiMysql />MySql</>,
            ],
            image: softio
        },
        {
            title: 'Haute-zone Madagascar',
            description: 'Logiciel de gestion des ventes d’offres internet, de cartes SIM et de produits télécom.Il centralise les opérations de distribution et facilite le suivi des stocks et clients',
            technos: [
                <><FaBootstrap />Bootstrap</>,
                <><SiJquery />JQuery</>,
                <><SiCodeigniter />Codeigniter</>,
                <><DiMysql />MySql</>,
            ],
            image: hauteZaune
        },
        {
            title: 'Gestion d\'école',
            description: 'Plateforme complète de gestion scolaire, conçue pour automatiser les processus administratifs d’un établissement.',
            technos: [
                <><SiJquery />JQuery</>,
                <><FaSymfony />Symfony</>,
                <><DiMysql />MySql</>,
            ],
            image: getstionEcole
        },
    ]



    return (
        <section className='bg-background' id='projets'>
            <div className='__container pb-20'>
                <Title title='Mes Projets' description='Quelques projets dont je suis fier' />
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 '>
                    {
                        projets.map((projet, key) => (
                            <div key={projet.title} className='card p-3 group'>
                                <div className='bg-secondary border-0 rounded-md overflow-hidden w-full h-45'>
                                    <img className='w-full h-45  transition-all duration-500 group-hover:scale-105 ' src={projet.image} alt="image" />
                                </div>
                                <div className='text-left'>
                                    <div className='text-2xl text-primary font-heading mb-3'>
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
                                                { techno }
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