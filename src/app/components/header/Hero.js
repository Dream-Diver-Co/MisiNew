"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";

const HeaderText = ({ text, index }) => {
  return (
    <div
      id={`testAnim${index}`}
      className="mx-auto text-center w-100 testAnimSlideIn homeTexts"
    >
      {/* <p className="font-weight-600" style={{ fontSize: '3rem' }}  ><span style={{ fontFamily: "Grape Nuts",color:"transparent" }}> ... </span></p> */}
      <div className="font-weight-600 text-white" style={{ fontSize: "5rem" }}>
        {" "}
        {text}{" "}
      </div>
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
  );
};

const Hero = () => {
  const [headerData, setHeaderData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}api/hero-slider/`
        );
        const data = await res.json();
        setHeaderData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        spaceBetween={30}
        centeredSlides={false}
        speed={600}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper3"
        edgeSwipeDetection={false}
        onSlideChange={(e) => {
          console.log("change", e.activeIndex);
          setTimeout(() => {
            // document.getElementById(`testAnim${e.activeIndex + 1}`)?.classList.add('testAnimSlideOut');
            // document.getElementById(`testAnim${e.activeIndex - 1}`)?.classList.add('testAnimSlideOut');

            document
              .getElementById(`testAnim${e.activeIndex - 1}`)
              ?.classList.remove("testAnimSlideIn");
            document
              .getElementById(`testAnim${e.activeIndex + 1}`)
              ?.classList.remove("testAnimSlideIn");

            document
              .getElementById(`testAnim${e.activeIndex}`)
              ?.classList.add("testAnimSlideIn");

            document
              .getElementById(`ken${e.activeIndex - 1}`)
              ?.classList.remove("ken");
            document
              .getElementById(`ken${e.activeIndex + 1}`)
              ?.classList.remove("ken");
            document
              .getElementById(`ken${e.activeIndex}`)
              ?.classList.add("ken");
          }, 100);
        }}
      >
        {headerData.map((data, index) => (
          <SwiperSlide key={index}>
            <div
              id={`ken${index}`}
              className="ken"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <img
                src={data.heroImage}
                style={{ width: "100%", height: "100vh", objectFit: "cover" }}
                alt="HERO"
              />
            </div>
            <HeaderText text={data.title} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
