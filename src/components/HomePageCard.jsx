import React from 'react'

const HomePageCard = ({title, img, link}) => {
  return (
    <div className='h-[420px] bg-white'>
      <div className='text-lg xl:text-xl font-semibold ml-4 mt-4'>{title}</div>
      <div className='h-[300px] m-4'>
        <img className='h-[100%] w-[100%] object-cover' src={img} alt="the" /></div>
      <div className='text-xs xl:text-xs text-blue-400 ml-4'>{link}</div>
    </div>
  )
}

export default HomePageCard