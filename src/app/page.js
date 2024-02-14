import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/hero/Hero";
import Award from "./components/award/Award";
import SpecialEventd from "./components/specialEvents/SpecialEventd";
import WhyUs from "./components/whyUs/WhyUs";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <Award/>
      <SpecialEventd/>
      <WhyUs/>
    </main>
  );
}
