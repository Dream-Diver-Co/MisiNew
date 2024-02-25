import { Inter } from "next/font/google";
import 'aos/dist/aos.css';
import "./globals.css";
import "./styles.css";
import "./booking.css";
import "./embala.css";
import "./responsive.css";
import "./IdealBankSectionStyles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './page.module.css';
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrolling/ScrollToTop";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Misi Nueropsy",
  description: "Misi Nueropsy is a therapy website with an appointment/booking system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        <Footer/>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
