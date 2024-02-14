import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Misi Nueropsy",
  description: "Misi Nueropsy is a therapy website with an appointment/booking system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@2.10.1/dist/react-bootstrap.min.js"></script>
      </body>
    </html>
  );
}
