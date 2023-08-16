import React from 'react'
import Carousel from './Carousel'
import HomePageCard from './HomePageCard'
import cardData from '../../public/data/cardData'
const HomePage = () => {
  const cardElement = cardData.map(x => {return ( <HomePageCard title={x.title} img={x.img} link={x.link}/>)})
  return (
    <div className=' bg-amazonclone-background '>
      <div className="min-w-[1000px] max-w-[150px] m-auto">
        Testing
        <Carousel />
        <div className='grid grid-cols-3 xl:grid-cols-4'>
          {cardElement}
        </div>
      </div>
    </div>
  )
}

export default HomePage
