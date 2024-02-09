import Demo from "@/components/common/Demo";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'swiper/css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Demo />
      <Footer />
    </>
  );
}
