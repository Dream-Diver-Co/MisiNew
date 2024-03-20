"use client";
import Image from "next/image";
import AOS from "aos";
import styles from "./page.module.css";
import "./globals.css";
import "./styles.css";
import "./booking.css";
import "./embala.css";
import "./responsive.css";
import "./IdealBankSectionStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import Award from "./components/award/Award";
import SpecialEventd from "./components/service/SpecialEventd";
import WhyUs from "./components/whyUs/WhyUs";
import Review from "./components/review/Review";
import ServiesText from "./components/service/ServiesText";
import Prices from "./components/prices/Prices";
import Header from "./components/header/Header";
import Hero from "./components/header/Hero";
import Head from "next/head";
import { useEffect } from "react";
import ScrollToTop from "./components/scrolling/ScrollToTop";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Head>
        <title>My page title</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Award />
        <SpecialEventd />
        <ScrollToTop />
        <WhyUs />
        <Review />
        <ServiesText />
        <Prices />
      </main>
    </div>
  );
}
