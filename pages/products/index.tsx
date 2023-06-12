import React, {useState} from 'react';
import PageTitle from "../../Components/PageTitle/PageTitle";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {productItem} from "@/interfaces/common";
import Image from "next/image";
import {it} from "node:test";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import Pagination from "@/Components/Pagination/Pagination";
import NotFound from "@/Components/NotFound/NotFound";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Products = ({products}:{products:productItem[]}) => {
    const {t,i18n} = useTranslation('common')
    const [pagination, setPagination] = useState(1)

    return <>
        <Head>
            <title>{t('products')}</title>
        </Head>
        {typeof products !== 'string' ? <>
            <div id="site-main" className="site-main">
                <div id="main-content" className="main-content">
                    <div id="primary" className="content-area">
                        <PageTitle pageTitle={t('products')} currentAddress={t('products')}/>

                        <div id="content" data-aos="fade-zoom-in"
                             data-aos-easing="ease-in-back"
                             data-aos-delay="300"
                             data-aos-offset="0"
                             data-aos-duration="700" className="site-content" role="main">
                            <div className="section-padding">
                                <div className="section-container p-l-r">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                            {Array.isArray(products) ? <>
                                                <div className="products-topbar clearfix">
                                                    <div className="products-topbar-left">
                                                        <div className="products-count">
                                                            {t('showing-result') + products?.length}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-content">
                                                    <div className="tab-pane fade show active" id="layout-grid"
                                                         role="tabpanel">
                                                        <div className="products-list grid">
                                                            <div className="row">
                                                                {products.slice((pagination - 1) * 10, (pagination - 1) * 10 + 10).map(item => {
                                                                    return <Link key={item.id}
                                                                                 href={'/products/' + item.id}
                                                                                 className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                                                        <div
                                                                            className="products-entry clearfix product-wapper">
                                                                            <div className="products-thumb">
                                                                                {/*<div className="product-lable">*/}
                                                                                {/*    <div className="hot">Hot</div>*/}
                                                                                {/*</div>*/}
                                                                                <div>
                                                                                    <Image width="600" height="600"
                                                                                           src={process.env['NEXT_PUBLIC_MAIN_PATH_WITHOUT_API'] + item.photo}
                                                                                           className="post-image"
                                                                                           alt=""/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="products-content">
                                                                                <div className="contents text-center">
                                                                                    <h3 className="product-title"><span
                                                                                    >{item.translations.find(item => item.locale === i18n?.language)?.name}</span>
                                                                                    </h3>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                })}

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </> : ''}

                                        </div>
                                    </div>

                                    <Pagination pagination={pagination} data={products} setPagination={setPagination}/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> : <NotFound/>}
    </>
};

export async function  getServerSideProps(context:any) {
    const products = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH'] + '/product')
    const productsJson = await products.json()
    return {
        props:{
            products:productsJson.product,
            ...(await serverSideTranslations(context.locale, ["common"])),

        }
    }
}

export default Products;