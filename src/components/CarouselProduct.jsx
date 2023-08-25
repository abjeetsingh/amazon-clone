import { Navigation, Pagination,Autoplay, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Link} from 'react-router-dom'
const CarouselProduct = () => {
  return (
    <div className='bg-white m-3'>
      <p className='text-2xl font-semibold p-3'>Best Sellers</p>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        modules= {[Navigation, Pagination]} 
        navigation = {true}
        // className='h-[50%]'
        
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <Link to={`/product/${i}`}>
              <img
                src={`../images/product_${i}_small.jpg`}
                alt="Carousel product"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;
