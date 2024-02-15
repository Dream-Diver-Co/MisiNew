'use client'
import React from 'react'
import Link from 'next/link';
import { useContext } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import imageLogoBig from "@../../../public/images/misilogo.png";
import Map from "@/app/components/contact/Map";
const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="bg-black text-white text-center text-md-start py-5"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-3 mb-5">
              <img
                loading="lazy"
                src={imageLogoBig.src}
                alt="logo1"
                className="mb-3"
                width="100%"
              />

              <div className="editable-text left">
                <h2></h2>
                <p>MiSi Neuropsy&nbsp;</p>
                <p>
                  <strong>Locatie</strong>
                  <br />
                  Head office / postal address
                  <br />
                  Weena 742A
                  <br />
                  3014 DA Rotterdam
                </p>{" "}
                <p>
                  <strong>Treatment location</strong>
                  <br />
                  Weena 732, 11th floor.
                  <br />
                  3014 DA Rotterdam
                </p>
                <p>
                  <strong>Opening hours</strong>
                  <br />
                  Every day 08:00-20:00, except Sunday.
                </p>
              </div>

              <ul className="social-nav navbar-nav flex-row justify-content-center justify-content-md-start mb-4">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaFacebook />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/">
                    <Link className="nav-link text-white active" href="#">
                      Home
                    </Link>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <Link className="nav-link text-white" href="/about">
                      AboutUs
                    </Link>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services">
                    <Link className="nav-link text-white" href="/services">
                      Services
                    </Link>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/career">
                    <Link className="nav-link text-white" href="/career">
                      Career
                    </Link>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <h2>CONTACT</h2>
              <div className="editable-text left">
                <h2></h2>{" "}
                <p>
                  <strong>Telefoon</strong>
                  <br />
                  <Link href="Tel:+316%202818%203284">+316 2818 3284</Link>&nbsp;(Voor
                  zorginhoudelijke vragen, 24/7 bereikbaar)
                  <br />
                  +3110 333 1901
                </p>{" "}
                <p>
                  <strong>E-mail</strong>
                  <br />
                  <Link href="http://mailto:info@misineuropsy.nl">
                    info@misineuropsy.nl
                  </Link>
                  &nbsp;(algemeen)
                  <br />
                  <Link href="mailto:Zorg@misineuropsy.nlZorg@misineuropsy.nl">
                    zorg@misineuropsy.nl
                  </Link>
                  &nbsp;(aanmelden/zorgvragen)
                </p>
              </div>
            </div>
            <div
              className="col-lg-3"
              style={{ overflow: "hidden", height: "350px" }}
            >
              <Map />
            </div>
          </div>
        </div>
      </footer>
      <div id="dream-diver" className="bg-dark text-white py-2">
        <div className="container">
          <p className="text-end mb-0">
            Developed by{" "}
            <Link
              href="https://dreamdiver.nl/"
              rel="noreferrer"
              className="text-dreamDiver"
            >
              DREAM DIVER
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer