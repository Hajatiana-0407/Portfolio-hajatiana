import React from 'react'

const BntLink = ({ href = '', icon , size='md' }) => {
    return (
        <a href={href}
            target='_blank'
            className={`${size === 'xl' ? 'w-12 h-12' : 'w-10 h-10'} shadow shadow-secondary/20 flex justify-center items-center rounded-full bg-background-primary text-primary hover:scale-125 hover:bg-theme/80 hover:shadow-xl hover:shadow-theme/15 hover:text-background-primary transition-all`}
        >
            {icon}
        </ a>
    )
}

export default BntLink