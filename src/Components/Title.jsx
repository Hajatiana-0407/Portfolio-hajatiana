import React from 'react'

const Title = ({ title = 'My Title'}) => {
    const titleTab = title.split(' ' , 2 )
  return (
    <div className='w-full font-heading text-2xl'>
        <div className='__container flex justify-center items-center'>
            <div className='py-2 px-10 w-[max-content] text-white '>
                    <h2>
                        { titleTab[0] && titleTab[0] }
                        {' '}
                        <span className='text-green-400'>{ titleTab[1] && titleTab[1] }</span>
                        </h2>
                    <div className='w-1/2 p-1 mt-1 rounded bg-green-400 mx-auto '></div>
            </div>
        </div>
    </div>
  )
}

export default Title