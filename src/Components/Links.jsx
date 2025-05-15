import React from 'react'
import { motion } from 'motion/react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
const Links = () => {
    const NavIconClassName = 'flex justify-center items-center w-[40px] h-[40px] rounded-full border-1 border-gray-400 relative hover:text-[#121212] hover:text-[#121212] hover:bg-white transition ease-in hover:border-0'
    return (
        <>
            <motion.a whileTap={{ scale: 0.8 }} href="#" className={NavIconClassName}><FaFacebookF /></motion.a>
            <motion.a whileTap={{ scale: 0.8 }} href="#" className={NavIconClassName}><FaLinkedinIn /></motion.a>
            <motion.a whileTap={{ scale: 0.8 }} href="#" className={NavIconClassName}><BsGithub /></motion.a>
        </>
    )
}

export default Links