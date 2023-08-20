import { Navigation, Pagination,Autoplay, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CarouselCategory = () => {
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
        <SwiperSlide>
          <img src="../images/category_0.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/category_1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/category_2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/category_3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/category_4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/category_5.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CarouselCategory