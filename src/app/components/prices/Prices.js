'use client'
import React,{ useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import'@/app/embala.css'
import'@/app/booking.css'
import'@/app/styles.css'
import'@/app/IdealBankSectionStyles.css'
import'@/app/responsive.css'
import'@/app/page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import th from '@../../../public/images/services/tp.jpg'
import dr from '@../../../public/images/services/dr.jpg'
import eh from '@../../../public/images/services/eh.jpg'
import dt from '@../../../public/images/services/dt.jpg'
import nic from '@../../../public/images/services/nic.jpg'
import test1 from '@../../../public/images/refer/test1.jpg'
import Link from 'next/link'
const Prices = () => {
  const [match, setMatch] = useState(false)

  const [services, setServices] = useState([
    {
      id: 1,
      href: "/therapy",
      name: "Therapy",
      description: "We treat for various psychological care",
      image: th.src
    },
    {
      id: 2,
      href: "/diagnostic-research",
      name: "Diagnostic Research",
      description: "The diagnostics in the context of the treatment that we...",
      image: dr.src
    },
    {
      id: 3,
      href: "/e-health",
      name: "E-Health",
      description: "MiSi NeuroPsy uses eHealth support",
      image: eh.src
    },
    {
      id: 4,
      href: "/decide-together",
      name: "Decide Together",
      description: "Only the best healthcare offer is good enough for you",
      image: dt.src
    },
    {
      id: 5,
      href: "/non-insured-care",
      name: "Non-insured care",
      description: "In addition to insured care, we also offer non-insured care",
      image: nic.src
    },
    {
      id: 6,
      href: "/referrers",
      name: "Referrer",
      description: "We offer insured care for various diagnosis groups",
      image: test1.src
    },
  ])
  useEffect(()=>{
    const mediaMatch = window.matchMedia('(min-width: 500px)');
    if (mediaMatch.matches) {
      setMatch(true)
    }
  })
  return (
    <section id="prices">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 mt-5">
            <div className="d-flex justify-content-center">
              <h1 className="h1-margin-bottom text-center"></h1>
            </div>
            <div className="prices-row prices-row-1 row text-center mb-5" style={{ height: match ? '900px' : '1450px' }}>

              {services.map((service, index) => (
                <div key={service.name} data-aos={index % 2 == 0 ? "zoom-in-down" : "zoom-in-up"} data-aos-duration="1000" className="col-6 col-md-4 mb-3 cats">
                  <div className=" catsContent" style={{ height: '100%' }}>
                    <div className='rounded-5 frontSide'>
                      <div style={{ height: '250px' }}>
                        <img src={service.image} style={{ width: 'auto', height: '100%' }} alt="1.png" />
                      </div>
                      <div className="p-2 d-flex align-items-center justify-content-center w-100 text-center">
                        <div>
                          <h3 className="text-dark">{service.name}</h3>
                          <p> {service.description} </p>
                        </div>
                      </div>
                    </div>
                    <div className='rounded-5 backSide' style={{ backgroundImage: `url(${service.image})`,backgroundSize:'cover' }}>
                      <div className='w-100 h-100 row align-items-center justify-content-center' style={{ backdropFilter: 'blur(10px) brightness(0.7)' }}>
                        <div className='col-12'>
                          <div>
                            <Link href={service.href}>
                              <button className='my-2 btn btn-link text-light'>View details</button>
                            </Link>
                          </div>
                          <div>
                            <Link href='/contact'>
                              <button className='my-2 btn btn-dark '>Contact</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prices