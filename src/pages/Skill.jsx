import React from 'react'
import { FaGitAlt, FaReact } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { RiTailwindCssLine } from 'react-icons/ri';
import { SiJquery } from 'react-icons/si';
import { FaSymfony } from 'react-icons/fa';
import { SiCodeigniter } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { FaNodeJs } from "react-icons/fa6";
import Title from '../Components/Title';

const Skill = () => {

    const competences = [
        {
            category: 'Desing',
            items: [
                {
                    icone: <FaBootstrap size={25} />,
                    descri: 'Bootstrap',
                    isPrefered: false,
                },
                {
                    icone: <RiTailwindCssLine size={25} />,
                    descri: 'Tailwind CSS',
                    isPrefered: true,
                },
            ]
        },
        {
            category: 'Front-end',
            items: [
                {
                    icone: <FaReact size={25} />,
                    descri: 'React js',
                    isPrefered: true,
                },
                {
                    icone: <SiJquery size={25} />,
                    descri: 'JQuery',
                    isPrefered: true,
                },
                {
                    icone: <TbBrandReactNative size={25} />,
                    descri: 'React Native',
                    isPrefered: false,
                },
            ]
        },
        {
            category: 'Back-end',
            items: [
                {
                    icone: <FaSymfony size={25} />,
                    descri: 'Symfony',
                    isPrefered: true,
                },
                {
                    icone: <SiCodeigniter size={25} />,
                    descri: 'Codeigniter',
                    isPrefered: true ,
                },
                {
                    icone: <FaNodeJs size={25} />,
                    descri: 'NodeJs',
                    isPrefered: true,
                },
            ]
        },
        {
            category: 'Autre',
            items: [
                {
                    icone: <FaGitAlt size={25} />,
                    descri: 'Git et GitHub',
                    isPrefered: true,
                }
            ]
        }
    ]


    return (
        <section className='bg-background' id='competences'>
            <div className='__container pb-20'>
                <Title title='Compétences' description='Voici mes compétences techniques' />
                <div className='flex justify-between flex-wrap gap-10 mt-2'>
                    {competences.map((competence, key) => (
                        <div key={`skill-title-${key}`} className=''>
                            <div >
                                <h2 className='text-lg text-primary font-heading font-bold '>{competence.category} </h2>
                            </div>
                            <div className=''>
                                <ul className='text-secondary flex flex-col  sm:items-start '>
                                    {competence.items.map((item, key) => (
                                        <li key={key} className={`my-2 text-base ${item.isPrefered && ''}`}>
                                            <div className={`flex items-center   gap-2 py-1 w-[max-content] ${item.isPrefered ? 'text-primary bg-gradient-to-r from-primary to-theme bg-clip-text border-b border-gray-500 ' 
                                                : ''}  `}>
                                                {item.icone} <span className={`${item.isPrefered && "text-transparent underline"}`}>{item.descri}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skill