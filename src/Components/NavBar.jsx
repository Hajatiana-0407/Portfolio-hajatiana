import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaCaretRight } from 'react-icons/fa'
import { motion } from 'motion/react'
import { useAppContext } from '../context/AppContext'
import { CgMenuRightAlt } from 'react-icons/cg'
import Links from './Links'
import Button from './Button'

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { activeOnglet } = useAppContext();
    useEffect(() => {
        const handleScrolle = () => {
            const y = window.scrollY;
            
            if (y > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false)
            }

            
        };
        window.addEventListener('scroll', handleScrolle);
        handleScrolle();

        return () => {
            window.removeEventListener('scroll', handleScrolle);
        }
    }, [])


    // MOBILE 
    const [isMobile, setIsMobile] = useState(false)


    useEffect(() => {
        const handleResize = () => {
            const size = window.innerWidth;
            if (size > 1044) {
                setIsMobile(false)
            } else {
                setIsMobile(true);
            }
        }
        window.addEventListener('resize', handleResize);

        handleResize();


        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    // MOBILE 


    return (
        <>
            <div className={`fixed left-0 z-40 right-0 `}>
                <div className='__container'>
                    <div className='flex  py-3 items-center backdrop-blur-md bg-backgroud-transparent font-normal font-heading'>
                        <a href={'#accueil'}>
                            <h1 className='text-3xl'><span className={`text-theme underline dark:decoration-primary `}>Port</span><span className={`underline  decoration-theme ${isScrolled ? '' : 'text-[#121212]'} dark:text-primary `}>folio</span> </h1>
                        </a>
                        {!isMobile ?
                            <NavDescTop isScrolled={isScrolled} />
                            :
                            <NavMobile isScrolled={isScrolled} />
                        }
                    </div>
                </div>
            </div>
            {activeOnglet !== 'accueil' &&
                <div className='fixed z-20 bottom-20 right-4 xl:right-[calc((100%-1200px)/2+16px)]  w-[max-content]'>
                    <Button href='#accueil' icon={<FaArrowUp />} />
                </div>
            }

        </>




    )
}


const NavDescTop = ({ isScrolled }) => {
    return (
        <nav className='ms-auto flex'>
            <NavBarLink className='flex items-center gap-4 text-secondary' />
            <div className='ml-10 flex items-center gap-4'>
                <Links />
            </div>
        </nav>
    )
}
const NavMobile = ({ isScrolled }) => {

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(v => !v);
    }

    const variantMenu = {
        'hidden': { x: 0 },
        'visible': {
            x: -240
        }
    }
    return (
        <nav className='ms-auto'>
            <button type='button' onClick={toggleMenu} className='flex text-primary items-center cursor-pointer'>
                <CgMenuRightAlt size={30} />
            </button>
            <motion.div
                variants={variantMenu}
                className='bg-[#121212f1] z-50 absolute top-0 -right-65   h-screen shadow-lg shadow-theme/80 p-10'
                initial={'hidden'}
                animate={showMenu ? 'visible' : 'hidden'}
            >
                <button className='absolute text-primary top-1 left-0.5 cursor-pointer' onClick={toggleMenu}>
                    <FaCaretRight size={25} />
                </button>
                <nav className='text-secondary'>
                    <NavBarLink className='flex flex-col items-center justify-center gap-3' onClick={() => { setShowMenu(false) }} />
                </nav>
                <nav className='mt-10 flex items-center  gap-4'>
                    <Links />
                </nav>
            </motion.div>

        </nav>
    )
}


const NavBarLink = ({ className = '', onClick = () => { } }) => {
    const { activeOnglet, setActiveOnglet } = useAppContext();

    return (
        <ul className={className}>
            {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'services', label: 'Services' },
                { id: 'projets', label: 'Mes projets' },
                { id: 'competences', label: 'Compétences' },
                { id: 'a-propos', label: 'À propos' },
                { id: 'contact', label: 'Contact' },
            ].map(({ id, label }) => (
                <li key={id}>
                    <a
                        href={`#${id}`}
                        onClick={() => { setActiveOnglet(id); onClick() }}
                        className={`relative link-underline py-1 px-2 ${activeOnglet === id
                            ? 'text-theme link-underline-active'
                            : 'hover:text-primary'
                            }`}
                    >
                        {label}
                    </a>
                </li>
            ))}
        </ul>

    )
}

export default NavBar