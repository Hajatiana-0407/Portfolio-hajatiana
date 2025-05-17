import React from 'react'

const Button = ({ label = '', icon, type = 'link', href = '#', iscolored = false, download = false , target='' }) => {
    let isLink = false;
    if (type === 'link') {
        isLink = true;
    }
    return (
        <>
            {isLink && <a
                href={href}
                target={target}                download={download}
                className={`w-[max-content] rounded-full flex items-center justify-center gap-1 py-2 px-4 text-md  cursor-pointer shadow-xl shadow-theme/25  hover:scale-105 transition-all duration-200 active:scale-90 ${iscolored ? 'bg-theme/90 border border-theme hover:bg-theme/70 active:ring-offset-2 active:ring-theme' : 'bg-background-primary  shadow shadow-secondary text-primary'}`}>
                <span className='text-xl'>
                    {icon}
                </span>
                {label !== '' && <span>{label} </span>}
            </a>}
            {!isLink &&
                <button
                    type={type}
                    className={`${iscolored ? 'bg-theme/70 border border-theme hover:bg-theme/80 active:ring-offset-2 active:ring-theme' : 'bg-secondary/10 border border-primary shadow-md text-primary'}  w-[max-content] rounded-full flex items-center justify-center gap-1 py-2 px-4 text-md  cursor-pointer shadow shadow-theme/50  hover:scale-105 transition-all duration-200 active:scale-90`}>
                    {icon}
                    {label !== '' && <span>{label} </span>}
                </button>
            }
        </>

    )
}
export default Button