import React from 'react'

const Title = ({ title = 'My Title', description = 'Petite description du titre' }) => {
  return (
    <div className='w-full font-heading  py-10'>
      <div className='__container flex flex-col gap-5  justify-center items-center'>
        <div className='py-2 px-10 w-[max-content] text-theme font-bold  '>
          <h2 className='text-3xl'>{title}
          </h2>
          <div className='w-1/2 p-[2px] mt-1 mx-auto rounded-full bg-linear-to-r from-theme to-primary '></div>
        </div>
        <div className='text-secondary text-xl'>
          <p className='text-center'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Title