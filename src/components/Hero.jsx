// // components/Hero.jsx
// import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = () => {
  const slides = [
    'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=1920&q=80',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1920&q=80',
    'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1920&q=80',
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1920&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1920&q=80'
  ];

  return (
    <section className="w-full h-[300px] md:h-[450px] lg:h-[550px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        speed={800}
        className="w-full h-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
