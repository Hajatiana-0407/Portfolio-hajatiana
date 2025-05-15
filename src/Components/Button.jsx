import React from 'react'

const Button = ({ label = 'Btn label', icon, type = 'link', href = '' }) => {
    let isLink = false;
    if (type === 'link') {
        isLink = true;
    }
    return (
        <>
            {isLink && <a
                href={href}
                className='bg-green-400 w-[max-content] rounded-full flex items-center justify-center gap-1 py-2 px-4 text-md text-background cursor-pointer shadow shadow-green-400/50'>
                <span>{label} </span>
                {icon}
            </a>}
            {!isLink &&
                <button
                    type={type}
                    className='bg-green-400 w-[max-content] rounded-full flex items-center justify-center gap-1 py-2 px-4 text-md text-background cursor-pointer shadow shadow-green-400/50'>
                    <span>{label} </span>
                    {icon}
                </button>
            }
        </>

    )
}
export default Button