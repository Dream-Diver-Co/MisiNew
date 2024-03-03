import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-creative'; // Import Swiper creative effect styles
import 'swiper/css/pagination'; // Import Swiper pagination styles
import 'swiper/css/navigation'; // Import Swiper navigation styles
import '../../responsive.css';
import '../../styles.css';
import logo1 from '@../../../public/images/images/connections/logo1.png';
import logo2 from '@../../../public/images/images/connections/logo2.png';
import logo3 from '@../../../public/images/images/connections/logo3.png';
import logo4 from '@../../../public/images/images/connections/logo4.png';
import logo5 from '@../../../public/images/images/connections/logo5.png';
import logo7 from '@../../../public/images/images/connections/logo7.png';
import Image from 'next/image';

const Award = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    align: "start",
    dragFree: true
  })

  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  useEffect(() => {
    if (!embla) return
    setInterval(() => {
      scrollNext()
    }, 3000)
  }, [embla, scrollNext])
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
    },
  ]
  return (
    <section id="award" className="bg-white w-100 py-4">
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
              className="mySwiper"
            >
              {brandImages.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className='text-center'>
                    <Image width={100} height={100} loading="lazy" src={data.image.src} style={{width:'150px',height:'auto'}} alt="award-coffure" />
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

export default Award;
