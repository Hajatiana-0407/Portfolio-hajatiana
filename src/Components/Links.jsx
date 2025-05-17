import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import BntLink from './BntLink'
const Links = ({ size = 'md' }) => {

    return (
        <>
            <BntLink size={size} href='https://www.facebook.com/nathiyh.jah' icon={<FaFacebookF />} />
            <BntLink size={size} href='https://www.linkedin.com/in/hajatiana-rasolondraibe' icon={<FaLinkedinIn />} />
            <BntLink size={size} href='https://github.com/Hajatiana-0407' icon={<BsGithub />} />
        </>
    )
}

export default Links