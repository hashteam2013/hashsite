"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Import the modules correctly

import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const TestiCarousel = () => {
  const slides = [
    { id: 1, image: '/images/brands.png' , title: '' , content: '' },
    { id: 2, image: '/images/brands2.png' , title: '' , content: '' },
    { id: 3, image: '/images/brands3.png' , title: '' , content: '' },
    { id: 4, image: '/images/brands4.png' , title: '' , content: '' },
    { id: 5, image: '/images/brands5.png' , title: '' , content: '' },
  ];

  return (
    <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 4000 }} // Configure autoplay with delay
    spaceBetween={0}
    style={{
      display: 'flex',
      borderRadius: '20px',
      overflowX: 'hidden',
    }}
    breakpoints={{
      320: { slidesPerView: 1, spaceBetween: 0 }, // Small screens (e.g., phones)
      640: { slidesPerView: 1, spaceBetween: 0 }, // Medium screens (e.g., small tablets)
      768: { slidesPerView: 2, spaceBetween: 0 }, // Tablets
      1024: { slidesPerView: 2.5, spaceBetween: 0 }, // Laptops
      1380: { slidesPerView: 2.5, spaceBetween: 0 }, // Large desktops
    }}
  >
    {slides.map((slide) => (
      <SwiperSlide
        style={{
        overflowX: 'hidden',
        }}
        key={slide.id}>
            <div className="flex gap-4">
              <div className="w-full p-4">
                  <div className="bg-darkn text-white p-6 rounded-xl w-full">
                      <div className="flex flex-col gap-4">
                          <div className="flex gap-6 items-center">
                              <Image src="/images/testi-thumb.png" className="w-auto" width={50} height={50} quality={100} alt="test"/>
                              <span className="py-2 px-4 rounded-full border border-white">S Schwartz</span>
                          </div>
                          <div className="flex flex-wrap">
                              <p className="text-base">I’ve been working with Hash Software for a little over year. I have to say that i am extremely happy with their knowledgeable web development services. All the people we worked with are experts in their field and they always make sure everything is running smoothly. I keep getting add-ons a new features to our website. Thanks to the Hash Software. The bottom line is , i am extremely happy with service and i love to work with them.</p>
                          </div>
                          <div className="flex flex-wrap justify-between items-center">
                              <span className="py-2 px-4 rounded-full border border-white">S Schwartz</span>
                              <Image src="/images/star.png" className="w-auto" width={300} height={100} alt="test"/>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <div className="w-1/3 p-4">
                  <div className="bg-darkn text-white p-6 rounded-xl w-full">
                      <div className="flex flex-col gap-4">
                          <div className="flex gap-6 items-center">
                              <Image src="/images/testi-thumb.png" className="w-auto" width={50} height={50} quality={100} alt="test"/>
                              <span className="py-2 px-4 rounded-full border border-white">S Schwartz</span>
                          </div>
                          <div className="flex flex-wrap">
                              <p className="text-base">I’ve been working with Hash Software for a little over year. I have to say that i am extremely happy with their knowledgeable web development services. All the people we worked with are experts in their field and they always make sure everything is running smoothly. I keep getting add-ons a new features to our website. Thanks to the Hash Software. The bottom line is , i am extremely happy with service and i love to work with them.</p>
                          </div>
                          <div className="flex flex-wrap justify-between items-center">
                              <span className="py-2 px-4 rounded-full border border-white">S Schwartz</span>
                              <Image src="/images/star.png" className="w-auto" width={300} height={100} alt="test"/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-1/3 p-4">
                  <div className="bg-darkn text-white p-6 rounded-xl w-full">
                      <div className="flex flex-col gap-4">
                          <div className="flex gap-6 items-center">
                              <Image src="/images/testi-thumb.png" className="w-auto" width={50} height={50} quality={100} alt="test"/>
                              <span className="py-2 px-4 rounded-full border border-white">S Schwartz</span>
                          </div>
                          <div className="flex flex-wrap">
                              <p className="text-base">I’ve been working with Hash Software for a little over year. I have to say that i am extremely happy with their knowledgeable web development services. All the people we worked with are experts in their field and they always make sure everything is running smoothly. I keep getting add-ons a new features to our website. Thanks to the Hash Software. The bottom line is , i am extremely happy with service and i love to work with them.</p>
                          </div>
                          <div className="flex flex-wrap justify-between items-center">
                              <span className="py-2 px-4 rounded-full border border-white">S Schwartz</span>
                              <Image src="/images/star.png" className="w-auto" width={300} height={100} alt="test"/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-1/3 p-4">
                  <div className="bg-darkn text-white p-6 rounded-xl w-full">
                      <div className="flex flex-col gap-4">
                          <div className="flex gap-6 items-center">
                              <Image src="/images/testi-thumb.png" className="w-auto" width={50} height={50} quality={100} alt="test"/>
                              <span className="py-2 px-4 rounded-full border border-white">S Schwartz</span>
                          </div>
                          <div className="flex flex-wrap">
                              <p className="text-base">I’ve been working with Hash Software for a little over year. I have to say that i am extremely happy with their knowledgeable web development services. All the people we worked with are experts in their field and they always make sure everything is running smoothly. I keep getting add-ons a new features to our website. Thanks to the Hash Software. The bottom line is , i am extremely happy with service and i love to work with them.</p>
                          </div>
                          <div className="flex flex-wrap justify-between items-center">
                              <span className="py-2 px-4 rounded-full border border-white">S Schwartz</span>
                              <Image src="/images/star.png" className="w-auto" width={300} height={100} alt="test" />
                          </div>
                      </div>
                  </div>
              </div> */}
              
          </div>
        
      </SwiperSlide>
    ))}
  </Swiper>
  
  );
};

export default TestiCarousel;


