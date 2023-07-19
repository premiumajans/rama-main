import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import MobileMenu from "@/Components/MobileMenu/MobileMenu";
import SearchWraper from "@/Components/SearchWraper/SearchWraper";
import BackToTop from "@/Components/BackToTop/BackToTop";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import {StrictMode, useEffect, useState} from "react";
import  AOS from  'aos'
import 'aos/dist/aos.css';
import {appWithTranslation} from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  const [visible,setVisible] = useState(false)

  useEffect(() => {
    AOS.init();
    if (typeof window !== undefined) {
      if(window.screen.width < 992 ) {
        setVisible(true)
      }
    }
  },[])




  return <>

    <Header />
     <StrictMode>
       <Component {...pageProps}/>
     </StrictMode>
    <Footer/>

    <BackToTop/>

    <SearchWraper/>
    {visible ? <MobileMenu/> : ''}

  </>
}


export default appWithTranslation(App);






