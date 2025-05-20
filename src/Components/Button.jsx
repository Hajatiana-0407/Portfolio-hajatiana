import React from 'react'

const Button = ({ label = '', icon, type = 'link', href = '#', iscolored = false, download = false, target = '', className = '' }) => {
    let isLink = false;
    if (type === 'link') {
        isLink = true;
    }
    return (
        <>
            {isLink && <a
                href={href}
                target={target}
                download={download}
                className={`w-[max-content] rounded-full flex items-center justify-center gap-1 py-2 px-4 text-md  cursor-pointer shadow-xl shadow-theme/25  hover:scale-105 transition-all duration-200 active:scale-90 ${iscolored ? 'bg-theme/90 border border-theme hover:bg-theme/70 active:ring-offset-2 active:ring-theme' : 'bg-background-primary  shadow shadow-secondary text-theme'} ${className} `}>
                <span className='text-xl'>
                    {icon}
                </span>
                {label !== '' && <span>{label} </span>}
            </a>}
            {!isLink &&
                <button
                    type={type}
                    download={download}
                    className={`w-[max-content] rounded-full flex items-center justify-center gap-1 py-2 px-4 text-md  cursor-pointer shadow-xl shadow-theme/25  hover:scale-105 transition-all duration-200 active:scale-90 ${iscolored ? 'bg-theme/90 border border-theme hover:bg-theme/70 active:ring-offset-2 active:ring-theme' : 'bg-background-primary  shadow shadow-secondary text-theme'} ${className} `}>
                    <span className='text-xl'>
                        {icon}
                    </span>
                    {label !== '' && <span>{label} </span>}
                </button>
            }
        </>

    )
}
export default Button