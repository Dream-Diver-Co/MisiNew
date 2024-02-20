import React from 'react'
import MainMenu from '../header/MainMenu'
const Heder = ({title,image}) => {
  return (
    <header id="header" className="vh-80">
      <MainMenu isSlider={ true } />
      <div id={`${image || "aboutHeader"}`} className="d-flex vh-80">
        <div className="m-auto text-white text-center">
          <h1 className="font-weight-600 h1" data-aos="fade-up" data-aos-delay="700" data-aos-duration="750"  >{ title || "About Us" }</h1>
        </div>
      </div>
    </header>
  )
}

export default Heder