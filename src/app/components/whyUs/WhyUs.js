'use client'
import React,{ useContext, useEffect } from 'react'
import CountUp from 'react-countup';
import imageIcon1 from '@/../../public/images/why/1.png';
import imageIcon2 from '@/../../public/images/why/2.png';
import imageIcon3 from '@/../../public/images/why/3.png';
import Image from 'next/image';
const WhyUs = () => {
  // const [state] = useContext(null);
  // const [clicked, setClicked] = React.useState(false);

  useEffect(() => {
    document.addEventListener('scroll', countUpAnimation);
  }, []);

  let event = false;
  const countUpAnimation = () => {
    if (window.scrollY < 1700) {
      event = false;
    } else {
      if (!event) {
        event = true;
        document.getElementById('clickButton').click();
        document.getElementById('clickButton2').click();
        document.getElementById('clickButton3').click();
        document.getElementById('clickButton4').click();
      }
    }
  }
  return (
    <section id="why-us" className="pt-3">
      <div className="container">
        <div className="row pt-5">
          <div className="col py-5 text-center">
            <h1 className="h1-margin-bottom font-weight-700" style={{ fontSize: '48px' }}>Why people choose us?</h1>
            <h6 className=''>People choose us for our best servives</h6>
            <div className="row m-5">
              <div className="col-md-4 mb-3">
                <img
                 loading="lazy" 
                 src={imageIcon1.src} 
                 alt="icon 1" />
                <h5 className="">Empathetic Professionals</h5>
                <p className='h-30'>Our professionals possess the ability to understand and share the feelings of others.They are compassionate,kind-hearted,and possess a high level of emotional intelligence.</p>
                <button type="button" className='btn bg-dark text-light posh-button'>View more</button>
              </div>
              <div className="col-md-4 mb-3">
                <div>
                <img
                className='img-fluid'
                loading="lazy" 
                src={imageIcon2.src} 
                alt="icon 2" />
                <h5 className="">Intensive care</h5>
                <p className='h-30'>We listen actively to our clients concerns and try to see things from their perspective, which enables them to provide personalized and effective care.</p>
                </div>
                <button type="button" className='btn bg-dark text-light posh-button'>View more</button>
              </div>
              <div className="col-md-4 mb-3">
                <img
                className='img-fluid'
                loading="lazy" 
                src={imageIcon3.src} 
                alt="icon 3" />
                <h5 className="">Certified therapist</h5>
                <p className='h-30'>Our therapists are professional and certified. We follow ethical guidelines and maintain strict confidentiality to ensure the safety and privacy of our clients.</p>
                <button type="button" className='btn bg-dark text-light posh-button'>View more</button>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='row text-center mt-3'>
          <div className='col-3'>
            <h1>
              <CountUp duration={3} useEasing start={100} end={200} suffix="+">
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button id='clickButton' style={{ display: 'none' }} onClick={start}>Start</button>
                  </div>
                )}
              </CountUp>
            </h1>
            <h6>Visitors daily</h6>
          </div>
          <div className='col-3'>
            <h1>
              <CountUp duration={3} useEasing start={0} end={30} suffix="+">
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button id='clickButton2' style={{ display: 'none' }} onClick={start}>Start</button>
                  </div>
                )}
              </CountUp>
            </h1>
            <h6>Therapists</h6>
          </div>
          <div className='col-3'>
            <h1>
              <CountUp duration={3} useEasing start={0} end={100} suffix="%">
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button id='clickButton3' style={{ display: 'none' }} onClick={start}>Start</button>
                  </div>
                )}
              </CountUp>
            </h1>
            <h6>Positive feedback</h6>
          </div>
          <div className='col-3'>
            <h1>
              <CountUp duration={3} useEasing start={0} end={50} suffix="+">
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button id='clickButton4' style={{ display: 'none' }} onClick={start}>Start</button>
                  </div>
                )}
              </CountUp>
            </h1>
            <h6>Awards & honors</h6>
          </div>
        </div>

        <hr/>
      </div>

    </section>
  )
}

export default WhyUs