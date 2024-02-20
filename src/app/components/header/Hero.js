'use client'
import MainMenu from './MainMenu';
import slide1 from '@../../../public/images/header/header1.jpeg';
import slide2 from '@../../../public/images/header/header2.jpeg';
import slide3 from '@../../../public/images/header/header3.webp';
import { EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-creative';

const headerData = [
    {
      image: slide1,
      text: "Love your Life"
    },
    {
      image: slide2,
      text: "Turn the stress into strength"
    },
    {
      image: slide3,
      text: "Heal the heart"
    },
  ]
  
  const HeaderText = ({text, index}) => {
  
    return (
      <div id={`testAnim${index}`} className="mx-auto text-center w-100 testAnimSlideIn homeTexts"  >
        {/* <p className="font-weight-600" style={{ fontSize: '3rem' }}  ><span style={{ fontFamily: "Grape Nuts",color:"transparent" }}> ... </span></p> */}
        <div className="font-weight-600 text-white" style={{ fontSize: '5rem', }}> {text} </div>
        {/* <div className='d-flex mt-5 justify-content-center align-items-center'>
  
          <Link href="/reservation">
            <button type="button" className=" btn posh-button text-light rounded-3 font-weight-900 " >
              <span>Register now</span>
            </button>
          </Link>
  
          <a href='https://pickup.deliverect.com/click_collect/menu/order/?res=schuimspaan&lang=nl' target="_" type="button" className=" btn posh-button text-light rounded-3 font-weight-900 ms-3" >
            <span>Order now</span>
          </a>
        </div> */}
      </div>
  
    )
  }

const Hero = () => {
  return (
    <>
    <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        speed={600}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,EffectCreative]}
        className="mySwiper3"
        edgeSwipeDetection={false}
        onSlideChange={
          (e) => {
            console.log("change", e.activeIndex);
            setTimeout(() => {
              // document.getElementById(`testAnim${e.activeIndex + 1}`)?.classList.add('testAnimSlideOut');
              // document.getElementById(`testAnim${e.activeIndex - 1}`)?.classList.add('testAnimSlideOut');

              document.getElementById(`testAnim${e.activeIndex - 1}`)?.classList.remove('testAnimSlideIn');
              document.getElementById(`testAnim${e.activeIndex + 1}`)?.classList.remove('testAnimSlideIn');

              document.getElementById(`testAnim${e.activeIndex}`)?.classList.add('testAnimSlideIn');

              document.getElementById(`ken${e.activeIndex - 1}`)?.classList.remove('ken');
              document.getElementById(`ken${e.activeIndex + 1}`)?.classList.remove('ken');
              document.getElementById(`ken${e.activeIndex}`)?.classList.add('ken');

            }, 100)
          }}
      >
        {headerData.map((data, index) => (
          <SwiperSlide key={index}>
            <div id={`ken${index}`} className='ken' style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
              <img src={data.image.src} style={{ width: '100%', height: '40rem', objectFit: 'cover' }} alt="..." />
            </div>
            <HeaderText text={data.text} index={index} />
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  )
}

export default Hero