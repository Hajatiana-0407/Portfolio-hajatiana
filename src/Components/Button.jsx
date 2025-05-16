import React from 'react'

const Button = ({ label = '', icon, type = 'link', href = '#', iscolored = false }) => {
    let isLink = false;
    if (type === 'link') {
        isLink = true;
    }
    return (
        <>
            {isLink && <a
                href={href}
                className={`${iscolored ? 'bg-theme/70 border border-theme hover:bg-theme/80 active:ring-offset-2 active:ring-theme' : 'bg-theme/10 border border-primary shadow-md text-primary'}  w-[max-content] rounded-full flex items-center justify-center gap-1 py-2 px-4 text-md  cursor-pointer shadow shadow-theme/50  hover:scale-105 transition-all duration-200`}>
                {icon}
                {label !== '' && <span>{label} </span>}
            </a>}
            {!isLink &&
                <button
                    type={type}
                    className={`${iscolored ? 'bg-theme/70 border border-theme hover:bg-theme/80 active:ring-offset-2 active:ring-theme' : 'bg-theme/10 border border-primary shadow-md text-primary'}  w-[max-content] rounded-full flex items-center justify-center gap-1 py-2 px-4 text-md  cursor-pointer shadow shadow-theme/50  hover:scale-105 transition-all duration-200`}>
                    {icon}
                    {label !== '' && <span>{label} </span>}
                </button>
            }
        </>

    )
}
export default Button