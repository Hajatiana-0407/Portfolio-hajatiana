import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
const Links = ({ size ='md'}) => {

    return (
        <>
            <a href="https://www.facebook.com/nathiyh.jah"
                target='_blank'
                className={`text-primary flex justify-center items-center bg-theme/10 shadow-theme ${ size === 'xl' ? 'w-12 h-12' : 'w-10 h-10'}  rounded-full border-1 border-secondary relative hover:text-background hover:bg-primary hover:shadow-md  transition ease-in hover:border-0`}><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/hajatiana-rasolondraibe"
                target='_blank'
                className={`text-primary flex justify-center items-center bg-theme/10 shadow-theme ${ size === 'xl' ? 'w-12 h-12' : 'w-10 h-10'}  rounded-full border-1 border-secondary relative hover:text-background hover:bg-primary hover:shadow-md  transition ease-in hover:border-0`}><FaLinkedinIn /></a>
            <a href="https://github.com/Hajatiana-0407"
                target='_blank'
                className={`text-primary flex justify-center items-center bg-theme/10 shadow-theme ${ size === 'xl' ? 'w-12 h-12' : 'w-10 h-10'}  rounded-full border-1 border-secondary relative hover:text-background hover:bg-primary hover:shadow-md  transition ease-in hover:border-0`}><BsGithub /></a>
        </>
    )
}

export default Links