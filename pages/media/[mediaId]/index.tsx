import PageTitle from "../../../Components/PageTitle/PageTitle";
import {useTranslation} from "next-i18next";
import {productItem} from "@/interfaces/common";
import {transformDate} from "@/utils/transformDate";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import Head from "next/head";
import React, {useState} from "react";
import {useRouter} from "next/router";
import FsLightbox from "fslightbox-react";
import NotFound from "@/Components/NotFound/NotFound";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const MediaItem = ({media}: { media: productItem }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [toggler, setToggler] = useState(false);
    const {query} = useRouter()
    const {i18n} = useTranslation('common')
    const {photos, photo, translations, created_at} = media
    const translated = translations?.find(item => item.locale === i18n.language)


    return <>
        {typeof  media !== 'string' ?  <>
            <Head>
                <meta name="keywords" content={translations?.find(item => item.locale === i18n.language)?.name}/>
                <title>
                    {translated?.name ? translated?.name + ' | GEAD' : 'GEAD'}
                </title>

                <meta property="og:title" content={translated?.name ? translated?.name + ' | GEAD' : 'GEAD'}/>
                <meta property="og:description"
                      content={translations?.find(item => item.locale === i18n.language)?.description}/>
                <meta property="og:image" content={process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API! + photo}/>
                <meta property="og:url"
                      content={process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API + 'writer/' + query.portfolioId}/>
            </Head>
            <div id="site-main" className="site-main">
                <FsLightbox
                    toggler={toggler}
                    sources={photos?.map((el, index) => <Image style={{objectFit: 'contain'}} width={1000} height={1000}
                                                               key={Math.random()}
                                                               src={process.env['NEXT_PUBLIC_MAIN_PATH_WITHOUT_API']! + el.photo}
                                                               alt={translations.find(item => item.locale === i18n.language)?.name || 'img'}/>)}
                    sourceIndex={slideIndex}
                />
                <div id="main-content" className="main-content">
                    <div id="primary" className="content-area">
                        <PageTitle pageTitle={translated?.name} currentAddress={translated?.name}/>

                        <div data-aos="fade-zoom-in"
                             data-aos-easing="ease-in-back"
                             data-aos-delay="300"
                             data-aos-offset="0"
                             data-aos-duration="700" id="content" className="site-content" role="main">
                            <div className="section-padding">
                                <div className="section-container p-l-r">
                                    <div className="post-details no-sidebar">
                                        <div style={{textAlign: 'center'}} className="post-image">
                                            <Image style={{width: '100%', height: '50%'}} width={800} height={1200}
                                                   src={process.env['NEXT_PUBLIC_MAIN_PATH_WITHOUT_API'] + photo}
                                                   alt={translated?.name!}/>
                                        </div>
                                        <h2 className="post-title text-center">
                                            {translated?.name}
                                        </h2>
                                        <div className="post-meta">

                                            <span className=""><i className="icon_clock_alt"></i>{transformDate(created_at)}</span>
                                        </div>
                                        <div className="post-content clearfix">
                                            {ReactHtmlParser(translated?.description!)}
                                            <div className="content-img">
                                                {photos?.map((item, index) => {
                                                    return <Image data-aos="fade-up"
                                                                  data-aos-duration="700" style={{cursor: 'pointer'}}
                                                                  onClick={() => {
                                                                      setSlideIndex(index);
                                                                      setToggler(!toggler);
                                                                  }} key={item.id}
                                                                  className={'col-lg-3 col-md-4 col-sm-6 mb-4'}
                                                                  width="1410" height="460"
                                                                  src={process.env["NEXT_PUBLIC_MAIN_PATH_WITHOUT_API"] + item.photo}
                                                                  alt={item.photo}/>
                                                })}

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> : <NotFound/> }
    </>
};

export async function getServerSideProps(context: any) {
    const {query} = context
    const media = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH'] + '/media/' + query.mediaId)
    const mediaJson = await media.json()
    return {
        props: {
            media: mediaJson.media,
            ...(await serverSideTranslations(context.locale, ["common"])),

        }
    }
}


export default MediaItem;