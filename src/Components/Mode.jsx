import React from 'react'
import { BiSun } from 'react-icons/bi'
import { BsMoonFill } from 'react-icons/bs'
import { useAppContext } from '../context/AppContext'

const Mode = ({ onToggle }) => {
    const { isDark  , toggleMode } = useAppContext() ; 
    return (
        <div className=' text-primary w-[max-content] flex items-center justify-center'>
            <div onClick={() => { toggleMode() }} className='h-8 group px-4 border flex items-center text-center  cursor-pointer rounded-full hover:text-background-primary hover:bg-theme hover:border-transparent hover:shadow-xl hover:shadow-theme/15   transition-all'>
                { isDark && <BiSun className='group-hover:rotate-45 transition-all duration-500' /> }
                { !isDark && <BsMoonFill className='group-hover:rotate-45 transition-all duration-500' />  }
            </div>
        </div>
    )
}

export default Mode