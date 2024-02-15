import Image from "next/image";
import styles from "./page.module.css";
import "./styles.css";
import "./responsive.css";
import "./IdealBankSectionStyles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/hero/Hero";
import Award from "./components/award/Award";
import SpecialEventd from "./components/specialEvents/SpecialEventd";
import WhyUs from "./components/whyUs/WhyUs";
import Review from "./components/review/Review";
import ServiesText from "./components/servicestext/ServiesText";
import Prices from "./components/prices/Prices";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <Award/>
      <SpecialEventd/>
      <WhyUs/>
      <Review/>
      <ServiesText/>
      <Prices/>
      <Footer/>
    </main>
  );
}
