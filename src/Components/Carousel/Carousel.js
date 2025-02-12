"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import the modules correctly
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Icons from '../Icons/Icons';

const Carousel = () => {
  const slides = [
    { id: 1, className: '', image: '/images/img-s-60.webp', video: '/images/Hope1.mp4' , title: 'M Barnes', content: 'I been building websites since 1998 & for last few years i have been looking around and trying to find the perfect developer. About a year ago i found Hash Software & since then we have grown the business dramatically & after running through so many people before hand I am delighted & over the moon with Hash Software & highly recommend.' },

    { id: 2, image: '/images/slide2.jpg', title: 'M Barnes', content: 'I been building websites since 1998 & for last few years i have been looking around and trying to find the perfect developer. About a year ago i found Hash Software & since then we have grown the business dramatically & after running through so many people before hand I am delighted & over the moon with Hash Software & highly recommend.' },

    { id: 3, image: '/images/slide3.jpg', title: 'M Barnes', content: 'I been building websites since 1998 & for last few years i have been looking around and trying to find the perfect developer. About a year ago i found Hash Software & since then we have grown the business dramatically & after running through so many people before hand I am delighted & over the moon with Hash Software & highly recommend.' },

    { id: 4, image: '/images/slide3.jpg', title: 'M Barnes', content: 'I been building websites since 1998 & for last few years i have been looking around and trying to find the perfect developer. About a year ago i found Hash Software & since then we have grown the business dramatically & after running through so many people before hand I am delighted & over the moon with Hash Software & highly recommend.' },

    { id: 5, image: '/images/slide3.jpg', title: 'M Barnes', content: 'I been building websites since 1998 & for last few years i have been looking around and trying to find the perfect developer. About a year ago i found Hash Software & since then we have grown the business dramatically & after running through so many people before hand I am delighted & over the moon with Hash Software & highly recommend.' },
  ];
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span className="' + className + '">' + '</span>';
  //   },
  // };

  return (
        <Swiper
          
          modules={[Autoplay,Navigation]}
          navigation
          loop={ true }
          autoplay={{ delay: 5000 }} 
          spaceBetween={50}
          slidesPerView={2} 
          className="px-14 mr-0"
          style={{'--swiper-pagination-bottom':'-5px', 
                  'padding':'20px',
                  '--swiper-navigation-color':'#3bc2db',
                  '--swiper-navigation-size':'25px',
                }}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 }, // Small screens (e.g., phones)
                  640: { slidesPerView: 1, spaceBetween: 20 }, // Medium screens (e.g., small tablets)
                  768: { slidesPerView: 1, spaceBetween: 30 }, // Tablets
                  1024: { slidesPerView: 1, spaceBetween: 40 }, // Laptops
                  1380: { slidesPerView: 2, spaceBetween: 50 }, // Large desktops
                }}
                  >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='text-center relative bg-white px-10 mx-4 md:mx-10 text-black pt-20 pb-6 px-2 drop-shadow-2xl rounded-xl my-4'>
              <p className='text-base font-normal'>{slide.content}</p>
              <h3 className='text-lg mt-4 font-bold'>{slide.title}</h3>
              <div className='bg-primary text-white absolute p-4 top-0 left-10'>
                <Icons name={'quotes'} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

  );
};

export default Carousel;
