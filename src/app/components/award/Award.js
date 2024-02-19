'use client'
import React,{ useRef, useState } from 'react'
import logo1 from '@../../../public/images/images/connections/logo1.png'
import logo2 from '@../../../public/images/images/connections/logo2.png'
import logo3 from '@../../../public/images/images/connections/logo3.png'
import logo4 from '@../../../public/images/images/connections/logo4.png'
import logo5 from '@../../../public/images/images/connections/logo5.png'
import logo7 from '@../../../public/images/images/connections/logo7.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../responsive.css'
import '../../styles.css'
const Award = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
    const brandImages = [
      {
        image: logo1,
      },
      {
        image: logo2,
      },
      {
        image: logo3,
      },
      {
        image: logo4,
      },
      {
        image: logo5,
      },
      {
        image: logo7,
      },]
  return (
    <section id="award" className="bg-white py-4">
      <div className="container">
        <div className="row">
          <div className=" px-4 px-lg-0">

            <Swiper
              effect={"creative"}
              slidesPerView={4}
              speed={500}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper4"
            >
              {brandImages.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className='text-center'>
                    <img loading="lazy" src={data.image.src} style={{width:'150px',height:'auto'}} alt="award-coffure" />
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Award