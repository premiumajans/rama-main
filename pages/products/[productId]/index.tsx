
import PageTitle from "../../../Components/PageTitle/PageTitle";
import SyncSlider from "../../../Components/MySlider/SyncSlider";
import {productItem} from "@/interfaces/common";
import {useTranslation} from "next-i18next";
import ReactHtmlParser from 'react-html-parser';
import Head from "next/head";
import React from "react";
import {useRouter} from "next/router";
import NotFound from "@/Components/NotFound/NotFound";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const ProductItem = ({product}:{product:productItem}) => {
    const {query} = useRouter()
    const {i18n} = useTranslation('common')
    const current = product.translations?.find(item => item.locale === i18n.language)

    return (typeof  product !== 'string'  ? <>
        <>
            <Head>
                <meta name="keywords" content={current?.name}/>
                <title>
                    {current?.name ? current?.name + ' | GEAD' : 'GEAD'}
                </title>

                <meta property="og:title" content={current?.name ? current?.name + ' | GEAD' : 'GEAD'}/>
                <meta property="og:description" content={current?.description}/>
                <meta property="og:image" content={   process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API! + product.photo}/>
                <meta property="og:url" content={ process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API + 'writer/' + query.productId }/>
            </Head>
            <div  id="site-main" className="site-main">
                <div id="main-content" className="main-content">
                    <div id="primary" className="content-area">
                        <PageTitle pageTitle={current?.name} currentAddress={current?.name}/>
                        <div id="content" data-aos="fade-zoom-in"
                             data-aos-easing="ease-in-back"
                             data-aos-delay="300"
                             data-aos-offset="0"
                             data-aos-duration="700" className="site-content" role="main">
                            <div className="shop-details zoom" data-product_layout_thumb="scroll" data-zoom_scroll="true"
                                 data-zoom_contain_lens="true" data-zoomtype="inner" data-lenssize="200"
                                 data-lensshape="square"
                                 data-lensborder="" data-bordersize="2" data-bordercolour="#f9b61e" data-popup="false">
                                <div className="product-top-info">
                                    <div className="section-padding">
                                        <div className="section-container p-l-r">
                                            <div className="row">
                                                <div className="product-images col-lg-7 col-md-12 col-12">
                                                    <div className="row">
                                                        <SyncSlider product={product}/>
                                                    </div>
                                                </div>

                                                <div className="product-info col-lg-5 col-md-12 col-12 ">
                                                    <h1 className="title">{current?.name}</h1>
                                                    <div className="description">
                                                        {ReactHtmlParser(current?.description!) }
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-related">
                                            <div className="section-padding">
                                                <div className="section-container p-l-r">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    </> : <NotFound/> )
};

export async function  getServerSideProps(context:any) {
    const {query} = context
    const product = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH'] + '/product/' + query.productId)
    const productJson = await product.json()
    return {
        props:{
            product:productJson.product,
            ...(await serverSideTranslations(context.locale, ["common"])),

        }
    }
}


export default ProductItem;