'use client'
import page from '../styles/page.module.scss';
import {useEffect} from "react";
import {sliderItem} from "@/interfaces/common";
import Slider from "react-slick";
import {useTranslation} from "next-i18next";
import ReactHtmlParser from "react-html-parser";
import Head from "next/head";
import NotFound from "@/Components/NotFound/NotFound";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
function Home({sliders}:{sliders:sliderItem[]}) {
    const {i18n} = useTranslation('common')
     useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    })

    const settings = {
        fade:true,
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
    };

    return <>
        <Head>
            <title>RAMA GROUP</title>
        </Head>
        {typeof sliders !== 'string' ? <>

            <div data-aos="fade-zoom-in"
                 data-aos-easing="ease-in-back"
                 data-aos-delay="300"
                 data-aos-offset="0"
                 data-aos-duration="700" className={page.home_video}>
                <ul className="full home_video_slider_box">
                    <Slider {...settings}>
                        {Array.isArray(sliders) && sliders.map(item => {
                            const translated = item.translations.find(item => item.locale === i18n.language)
                            return <li key={item.id} style={{height: '100vh'}}>
                                <video  style={{objectFit: 'fill', height: '80vh'}}  autoPlay={true} loop muted
                                       width="100%" height="100%"
                                       id="home_video" className="full full_h">
                                    <source  src={process.env['NEXT_PUBLIC_MAIN_PATH_WITHOUT_API'] + item.photo}
                                            type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"/>

                                </video>
                                <div data-aos="fade-zoom-left"
                                     data-aos-easing="ease-in-back"
                                     data-aos-delay="600"
                                     data-aos-duration="700"
                                     data-aos-offset="0" className={page.center + ' section-padding'}>
                                    <div className="full full_h after_logo">
                                        <div className="slider_content home_slide_content" style={{paddingTop: "0px"}}>
                                            <h1></h1>
                                            <h2></h2><h1><span style={{color: "white"}}>{translated?.title}</span>
                                        </h1>
                                            {ReactHtmlParser(translated?.description!)}</div>
                                    </div>
                                </div>
                            </li>
                        })}
                    </Slider>

                </ul>
            </div>
        </> : <NotFound/>}
    </>
}


export async function getServerSideProps(context:any) {
    const sliders = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH'] + '/slider')
    const slidersJson = await sliders.json()
    return {
        props: {
            sliders: slidersJson.sliders,
            ...(await serverSideTranslations(context.locale, ["common"])),

        }
    }
}


export  default  Home



