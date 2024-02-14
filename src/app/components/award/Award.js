'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import award1 from '@../../../public/images/images/connections/logo1.png'
import award2 from '@../../../public/images/images/connections/logo2.png'
import award3 from '@../../../public/images/images/connections/logo3.png'
import award4 from '@../../../public/images/images/connections/logo4.png'
import award5 from '@../../../public/images/images/connections/logo5.png'
import award6 from '@../../../public/images/images/connections/logo7.png'
import Image from 'next/image'
const Award = () => {
    const [emblaRef] = useEmblaCarousel()
  return (
    <div className="embla" ref={emblaRef}>
      <div className="container d-flex">
        <div className="embla__slide">
            <Image
            src={award1}
            // style={{
            //     width: '100vw',
            //     height: '50vh',
            // }}
            />
        </div>
        <div className="embla__slide">
            <Image
            src={award2}
            />
        </div>
        <div className="embla__slide">
            <Image
            src={award3}
            />
        </div>
        <div className="embla__slide">
            <Image
            src={award4}
            />
        </div>
        <div className="embla__slide">
            <Image
            src={award5}
            />
        </div>
        <div className="embla__slide">
            <Image
            src={award6}
            />
        </div>
      </div>
    </div>
  )
}

export default Award