import { Navigation, Pagination,Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CarouselCategory = () => {
  const navigate = useNavigate();
  const searchCategory = (category) => (
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchterm: ``
      })}`
    })
  )

  return (
    <div className='bg-white'>
      <div className='text-2xl font-semibold p-3'>Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        modules= {[Navigation, Pagination]} 
        navigation = {true}
        // className='h-[50%]'
        
      >
        <SwiperSlide onClick={() => searchCategory("Deals")} className=' cursor-pointer'>
          <img src="../images/category_0.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Amazon")} className=' cursor-pointer'>
          <img src="../images/category_1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Fashion")} className=' cursor-pointer'>
          <img src="../images/category_2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Computers")} className=' cursor-pointer'>
          <img src="../images/category_3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Home")} className=' cursor-pointer'>
          <img src="../images/category_4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Hobies")} className=' cursor-pointer'>
          <img src="../images/category_5.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CarouselCategory