'use client'
import React,{useRef,useState,useEffect,} from 'react'
import Image from 'next/image';
import '@/app/page.module.css'
import '@/app/booking.css'
import '@/app/embala.css'
import '@/app/globals.css'
import '@/app/IdealBankSectionStyles.css'
import '@/app/responsive.css'
import '@/app/styles.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaPhoneAlt, FaArrowRight, FaUserCircle } from "react-icons/fa";
import imageLogoBig from "@/../../public/images/misilogo.png";
import menuIcon from "@/../../public/images/buttons/menu.svg";
import closeIcon from "@/../../public/images/buttons/close.svg";
import useMobileDetect from "../mobileDetect/useMobileDetect";

const MainMenu = (device,isSlider) => {
  const [menuPresent, setMenuPresent] = useState(false);
  const mainMenuRef = useRef(null);
  const topRowRef = useRef(null);
  const navbarBrandImgRef = useRef(null);
  const router = useRouter();
  const path = router.pathname;

  const currentDevice = useMobileDetect();

  const flag =
    device === "mobile"
      ? currentDevice.isMobile()
      : device === "desktop"
      ? currentDevice.isDesktop()
      : true;

  useEffect(() => {
    // Navbar shrink function
    const navbarShrink = () => {
      if (!mainMenuRef.current) {
        return;
      }
      if (window.scrollY < 50) {
        mainMenuRef.current.classList.remove("navbar-shrink");
        // topRowRef.current.classList.add('d-lg-block')
      } else {
        mainMenuRef.current.classList.add("navbar-shrink");
        topRowRef.current.classList.remove("d-lg-block");
      }
    };
    navbarShrink();
    document.addEventListener("scroll", navbarShrink);
    if (window.location.pathname === "/") {
      hideMenu();
    }
  }, []);

  // const logout = async () => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/api/logout`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-type": "application/json",
  //           Authorization: `Bearer ${state.auth.token}`,
  //           Accept: "application/json",
  //         },
  //         body: {},
  //       }
  //     );
  //     localStorage.removeItem("login");
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("user");
  //     setState({
  //       ...state,
  //       auth: {
  //         isLogin: false,
  //         user: null,
  //         token: "",
  //       },
  //     });

  //     if (state.locale == "en") {
  //       window.location.href = "/en";
  //     } else {
  //       window.location.href = "/";
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const hideMenu = () => {
    document.getElementById("navFade").style.transition ="opacity 0.5s, transform 1.5s";
    document.getElementById("navFade").style.opacity = "0";
    document.getElementById("navFade").style.transform = "translateX(150%)";
    setMenuPresent(false);
  };

  const showMenu = () => {
    document.getElementById("navFade").style.transition =
      "opacity 1.5s, transform 0.5s";
    document.getElementById("navFade").style.transform = "translateX(0%)";
    document.getElementById("navFade").style.opacity = "1";
    setMenuPresent(true);
  };
  return (
    <nav
      id="main-menu"
      className={
        isSlider
          ? "navbar navbar-expand-lg navbar-dark m-0 p-0"
          : "navbar m-0 p-0 navbar-expand-lg navbar-dark without-slider"
      }
      ref={mainMenuRef}
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand me-0" href="/">
            <Image
              loading="lazy"
              src={imageLogoBig.src}
              alt="logo2x"
              width={150}
              height={150}
              className="navbar-brand-img d-inline-block"
              ref={navbarBrandImgRef}
            />
        </Link>

        <div className="w-100">
          <div
            className="top-row row mb-1 d-none d-lg-none"
            style={{ height: "0" }}
            ref={topRowRef}
          >
            <div className="col d-flex">
              <ul id="top-menu" className="nav mx-auto mx-md-0 ms-md-auto">
                <li className="nav-item">
                  <Link className="nav-link text-primary fw-bold" href="#">
                    <FaPhoneAlt /> +31 01 042 591 95
                  </Link>
                </li>
                  {/* <React.Fragment>
                    <li className="nav-item" style={{ cursor: "pointer" }}>
                      <Link href="/profile">
                        <div className="nav-link text-light d-flex align-items-center">
                          <FaUserCircle />
                          <div className="ms-2">
                            {state.text.Hello}, {state.auth.user.name}
                          </div>
                        </div>
                      </Link>
                    </li>

                    <li className="nav-item" style={{ cursor: "pointer" }}>
                      <a className="nav-link text-primary" onClick={logout}>
                        Logout
                      </a>
                    </li>
                  </React.Fragment> */}
                
                  <li className="nav-item">
                    <div
                      className="nav-link linkN text-uppercase"
                      style={{ cursor: "pointer" }}
                    >
                      <Link href="/login">Login/Register</Link>
                    </div>
                  </li>

                {/* <LanguageDropdown id="navbarLang1" navToggle={false} /> */}
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className=" navbar-collapse" id="navbarNav">
                <ul id="navFade" className="navbar-nav ms-auto" style={{textTransform: "uppercase"}}>
                  <li className="nav-item">
                    <Link className={"nav-link active fLoto"} href="/">
                        Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={
                          "nav-link fLoto"
                        } href="/about">
                        AboutUs
                    </Link>
                  </li>
                  <li className="nav-item ">
                      <Link className="nav-link fLoto" 
                      href="/waitings">
                          waiting times
                      </Link>
                    </li>
                  <li className="nav-item dropdown">
                    <Link className={
                            "nav-link dropdown-toggle fLoto"
                        } href="/service" data-bs-toggle="dropdown">
                        Services
                    </Link>
                    <ul
                      className="dropdown-menu dropdown-menu-dark bg-black"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-capitalize" href="/therapy">
                            therapy
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-capitalize" href="/diagnostic">
                            diagnostic research
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-capitalize" href="/e-health">
                            e-health
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-capitalize" href="/nonInsuredCare">
                            insured and uninsured care
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-capitalize" href="/decide-together">
                            decide-together
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-capitalize" href="/referrers">
                            referrers
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-capitalize " href="/toolslink">
                            Tools videos and links
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link className={
                          "nav-link fLoto"
                        } href="/career">
                       Career
                    </Link>
                  </li>

                  <button className="nav-item btn btn-warning  ms-2">
                    <Link className='text-dark' href="/register">
                      <div className='fLoto'>Register now</div>
                    </Link>
                  </button>

                  <button className="nav-item btn btn-danger ms-2">
                    <Link className='text-light ' href="/contact">
                      <div className='fLoto'>Contact us</div>
                    </Link>
                  </button>
                  {/* <form className="d-none d-lg-flex ms-lg-2">
                    <button type="button" className="btn-book-now btn btn-sm btn-primary rounded-0 font-weight-900" onClick={() => setState({ ...state, showBooking: !state.showBooking })}>
                      <img loading="lazy" src={imageSchedule.src} height="42" alt="schedule" />
                      <span>{state.text.bookNow}</span>
                    </button>
                  </form> */}
                </ul>
                <ul className="nav-sm-only nav d-lg-none">
                  {/* <LanguageDropdown id="navbarLang2" navToggle={true} /> */}
                </ul>
                <div className="text-light ms-3">
                  {" "}
                  {menuPresent ? (
                    <button onClick={hideMenu} className="btn">
                      <Image  sizes="100vw" src={closeIcon.src} width={32} height={32} alt='menu icon' />
                    </button>
                  ) : (
                    <button onClick={showMenu} className="btn">
                      <Image src={menuIcon.src} width={32} height={32} alt='menu icon'/>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
};
MainMenu.defaultProps = {
  device: "mobile" || "desktop",
}
export default MainMenu