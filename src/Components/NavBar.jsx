import React, { useEffect, useState } from 'react'
import { FaCaretRight, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { motion } from 'motion/react'
import { useAppContext } from '../context/AppContext'
import { CgMenuRightAlt } from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'
import Links from './Links'

const NavBar = () => {
    const NavIconClassName = '__icon_navigation flex justify-center items-center w-[40px] h-[40px] rounded-full border-1 border-gray-400 relative hover:text-[#121212]'
    const [isScrolled, setIsScrolled] = useState(false);


    const { activeOnglet, setActiveOnglet } = useAppContext();


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
            if (size > 600) {
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
        <div className={`fixed z-50 to-0% w-full py-3  text-white `}>
            <div className='__container flex items-center font-normal'>
                <a href={'#home'}>
                    <h2 className='text-3xl'><span className={`text-green-400 underline  ${isScrolled ? 'decoration-white' : 'decoration-[#121212]'} dark:decoration-white `}>Port</span><span className={`underline  decoration-green-400 ${isScrolled ? '' : 'text-[#121212]'} dark:text-white `}>folio</span> </h2>
                </a>
                {!isMobile ?
                    <NavDescTop isScrolled={isScrolled} />
                    :
                    <NavMobile isScrolled={isScrolled} />
                }
            </div>
        </div>
    )
}


const NavDescTop = ({ isScrolled }) => {
    return (
        <nav className='ms-auto flex'>
            <NavBarLink />
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
        'hidden': { x: 400 },
        'visible': {
            x: 0
        }
    }
    return (
        <nav className='ms-auto'>
            <button type='button' onClick={toggleMenu} className='flex items-center cursor-pointer'>
                <CgMenuRightAlt size={30} />
            </button>
            <motion.div
                variants={variantMenu}
                className='bg-[#121212f1] absolute top-0 right-0   h-screen shadow-lg shadow-green-900 p-10'
                initial={showMenu ? 'hidden' : 'visible'}
                animate={showMenu ? 'visible' : 'hidden'}
            >
                <button className='absolute text-white top-1 left-0.5 cursor-pointer' onClick={toggleMenu}>
                    <FaCaretRight size={25} />
                </button>
                <NavBarLink />
                <nav className='mt-10 flex items-center gap-4'>
                    <Links />
                </nav>
            </motion.div>

        </nav>
    )
}


const NavBarLink = () => {
    const { activeOnglet, setActiveOnglet } = useAppContext();
    
    return (
        <ul className='flex items-center gap-4 text-gray-400'>
            <li className='' onClick={() => setActiveOnglet('accueil')}>
                <a
                    href="#accueil"
                    className={`relative link-underline py-1 px-2 ${activeOnglet === 'accueil' ? 'text-green-400 link-underline-active' : 'hover:text-gray-50'}`}
                >
                    Accueil
                </a>
            </li>
            <li className='' onClick={() => setActiveOnglet('a-propos')}>
                <a
                    href="#a-propos"
                    className={`relative link-underline py-1 px-2 ${activeOnglet === 'a-propos' ? 'text-green-400 link-underline-active' : 'hover:text-gray-50'}`}
                >
                    A propos
                </a>
            </li>
        </ul>

    )
}

export default NavBar