import React from 'react'
import Carousel from './Carousel'
import HomePageCard from './HomePageCard'
import cardData from '../../public/data/cardData'
import CarouselCategory from './CarouselCategory'
import CarouselProduct from './CarouselProduct'
const HomePage = () => {
  const cardElement = cardData.map(x => {return ( <HomePageCard key = {x.title} title={x.title} img={x.img} link={x.link}/>)})
  return (
    <div className=' bg-amazonclone-background '>
      <div className="min-w-[1000px] max-w-[150px] m-auto">
        <Carousel />
        <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
          {cardElement}
          <div className='m-3 pt-8'>
            <img className='xl:hidden ' src="../images/banner_image_2.jpg" alt="" />
          </div>
        </div>
        <CarouselProduct/>
        <CarouselCategory />
        <div className='h-[200px]'>
          <img className='h-[100%] m-auto' src="../images/banner_image.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
