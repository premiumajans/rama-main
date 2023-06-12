import PageTitle from "../../Components/PageTitle/PageTitle";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {productItem} from "@/interfaces/common";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";
import Head from "next/head";
import NotFound from "@/Components/NotFound/NotFound";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Portfolio = ({portfolio}:{portfolio:productItem[]}) => {
    const {t,i18n} = useTranslation('common')

    return  <>
        <Head>
            <title>{t('portfolio')}</title>
        </Head>
        {typeof portfolio !== 'string' ? <>
            <div id="site-main" className="site-main">
                <div id="main-content" className="main-content">
                    <div id="primary" className="content-area">
                        <PageTitle pageTitle={t('portfolio')} currentAddress={t('portfolio')}/>
                        <section data-aos="fade-zoom-in"
                                 data-aos-easing="ease-in-back"
                                 data-aos-delay="300"
                                 data-aos-offset="0"
                                 data-aos-duration="700" className="section-padding">
                            <div className="block block-banners layout-4 banners-effect my-5 container">
                                <div className="row">
                                    {Array.isArray(portfolio) ? <>
                                        {portfolio.map(item => {
                                            const translated = item.translations.find(item => item.locale === i18n.language)
                                            return <Link key={item.id} className="col-md-12 col-lg-4  mb-4 sm-m-b-50"
                                                         href={'/portfolio/' + item.id}>
                                                <div className="block-widget-banner layout-5">
                                                    <div className="bg-banner">
                                                        <div className="banner-wrapper banners">
                                                            <div className="banner-image">
                                                                <a href="shop-grid-left.html">
                                                                    <Image style={{maxHeight: 400, height: 400}}
                                                                           width="496" height="577"
                                                                           src={process.env['NEXT_PUBLIC_MAIN_PATH_WITHOUT_API'] + item.photo}
                                                                           alt={translated?.name!}/>
                                                                </a>
                                                            </div>
                                                            <div className="banner-wrapper-infor">
                                                                <div className="info">
                                                                    <div className="content">
                                                                        <a className="link-title"
                                                                           href="shop-grid-left.html">
                                                                            <h3 className="title-banner">{translated?.name}</h3>
                                                                        </a>
                                                                        <div className="banner-image-description">
                                                                            {ReactHtmlParser(translated?.description!)}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        })}
                                    </> : ''}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </> : <NotFound/>}
    </>
};

export async function getServerSideProps(context:any) {
    const portfolio = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH'] + '/portfolio')
    const portfolioJson = await portfolio.json()
    return {
        props: {
            portfolio: portfolioJson.portfolio,
            ...(await serverSideTranslations(context.locale, ["common"])),

        }
    }
}

export default Portfolio;