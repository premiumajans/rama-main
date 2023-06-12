import MySlider from "../../Components/MySlider/MySlider";
import PageTitle from "../../Components/PageTitle/PageTitle";
import {useTranslation} from "next-i18next";
import {partnerItem, productItem} from "@/interfaces/common";
import ReactHtmlParser from "react-html-parser";
import Head from "next/head";
import NotFound from "@/Components/NotFound/NotFound";
import Image from "next/image";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const About = ({about, partner}: { about: productItem[], partner: partnerItem[] }) => {

    const {t, i18n} = useTranslation('common')

    const settingsBrand = {
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return <>
        <Head>
            <title>{t('about')}</title>
        </Head>
        {typeof about !== 'string' || typeof partner !== 'string' ? <>
            <div id="site-main" className="site-main">
                <div id="main-content" className="main-content">
                    <div id="primary" className="content-area">
                        <PageTitle pageTitle={t('about')} currentAddress={t('about')}/>

                        <div data-aos="fade-zoom-in"
                             data-aos-easing="ease-in-back"
                             data-aos-delay="300"
                             data-aos-offset="0"
                             data-aos-duration="700" id="content" className="site-content" role="main">
                            <div className="page-about-us">
                                <section className="section section-padding m-b-70">
                                    <div className="section-container">
                                        <div className="block block-banners banners-effect">
                                            <div className="block-widget-wrap">
                                                <div className="block-content">
                                                    <div className="block-widget-banner layout-16 no-space">
                                                        <div className="banners">
                                                            {Array.isArray(about) && about.map(item => {
                                                                const translated = item.translations.find(item => item.locale === i18n.language)

                                                                return <div  key={item.id}
                                                                            className="row my-4">
                                                                    <div className="col-md-6 banner-infor background-2">
                                                                        <div className="banner-wrapper-infor">
                                                                            <div className="info">
                                                                                <div className="content">
                                                                                    <h3 style={{overflowWrap: 'anywhere'}}
                                                                                        className="title-banner">{translated?.title}</h3>
                                                                                    <div
                                                                                        style={{overflowWrap: 'anywhere'}}
                                                                                        className="banner-image-description">
                                                                                        {ReactHtmlParser(translated?.description!)}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div
                                                                            className="banner-image">
                                                                            <a style={{height: '100%'}}>
                                                                                <Image width={600} height={600}
                                                                                       style={{height:350}}
                                                                                       src={process.env['NEXT_PUBLIC_MAIN_PATH_WITHOUT_API'] + item.photo}
                                                                                       alt={item.name}/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>


                                <section className="section section-padding top-border p-t-20 m-b-20">
                                    <div className="section-container">
                                        <div className="block block-image slider">
                                            <div className="block-widget-wrap">
                                                <MySlider settings={settingsBrand}>
                                                    {Array.isArray(partner) && partner.map(item => {
                                                        return <div key={item.id} className="item slick-slide">
                                                            <div className="item-image">
                                                                <a href={item.link}>
                                                                    <img width="450" height="450"
                                                                         src={process.env['NEXT_PUBLIC_MAIN_PATH_WITHOUT_API'] + item.photo}
                                                                         alt={item.link}/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    })}

                                                </MySlider>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> : <NotFound/>}
    </>

};


export async function getServerSideProps(context: any) {
    const about = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH'] + '/about')
    const aboutJson = await about.json()

    const partner = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH'] + '/partner')
    const partnerJson = await partner.json()
    return {
        props: {
            about: aboutJson.about,
            partner: partnerJson.partner,
            ...(await serverSideTranslations(context.locale, ["common"])),
        }
    }
}


export default About;