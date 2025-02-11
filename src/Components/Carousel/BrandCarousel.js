
"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Import the modules correctly

import Icons from '../Icons/Icons';
import { Autoplay } from 'swiper/modules';

const BrandCarousel = () => {
  const slides = [
    { id: 1, image: '/images/brands.png'},
    { id: 2, image: '/images/brands2.png'},
    { id: 3, image: '/images/brands3.png'},
    { id: 4, image: '/images/brands4.png'},
    { id: 5, image: '/images/brands5.png' },
  ];

  return (
    <Swiper
    modules={[Autoplay]}
    loop={true}
    autoplay={{ delay: 4000 }} // Configure autoplay with delay
    spaceBetween={50}
    slidesPerView={4}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '1720px',
    }}
    breakpoints={{
      320: { slidesPerView: 2, spaceBetween: 10 }, // Small screens (e.g., phones)
      640: { slidesPerView: 2, spaceBetween: 20 }, // Medium screens (e.g., small tablets)
      768: { slidesPerView: 2, spaceBetween: 30 }, // Tablets
      1024: { slidesPerView: 4, spaceBetween: 40 }, // Laptops
      1380: { slidesPerView: 4, spaceBetween: 50 }, // Large desktops
    }}
  >
    {slides.map((slide) => (
      <SwiperSlide
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        key={slide.id}
      >
        <div className="max-w-screen-1xl mx-auto py-8">
          <div className="">
            {typeof slide.image === 'string' ? (
              <img src={slide.image} alt={`Slide ${slide.id}`} className="py-4" />
            ) : (
              slide.image
            )}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  
  );
};

export default BrandCarousel;
