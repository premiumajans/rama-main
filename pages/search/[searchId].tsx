import PageTitle from "@/Components/PageTitle/PageTitle";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import React from "react";
import Image from "next/image";

const Search = () => {
    const {query} = useRouter()
    const {t} = useTranslation('common')
    return (
        <div id="site-main" className="site-main">
            <div id="main-content" className="main-content">
                <div id="primary" className="content-area">
                    <PageTitle pageTitle={`${query.searchId}`} currentAddress={`${query.searchId}`}/>
                    <div data-aos="fade-zoom-in"
                         data-aos-easing="ease-in-back"
                         data-aos-delay="300"
                         data-aos-offset="0"
                         data-aos-duration="700" id="content" className="site-content" role="main">
                        <div className="section-padding my-4">
                            <div className="products-topbar clearfix">
                                <div className="products-topbar-left">
                                    <div className="products-count">
                                        {t('showing-result') + 2}
                                    </div>
                                </div>
                            </div>
                            <div className="section-container p-l-r">
                                <div className="shop-wishlist">
                                    <table className="wishlist-items">
                                        <tbody>
                                        <tr className="wishlist-item">
                                            <td className="wishlist-item-remove"></td>
                                            <td className="wishlist-item-image">
                                                <a href="shop-details.html">
                                                    <Image width="600" height="600" src="/media/product/3.jpg" alt=""/>
                                                </a>
                                            </td>
                                            <td className="wishlist-item-info">
                                                <div className="wishlist-item-name">
                                                    <a href="shop-details.html">Chair Oak Matt Lacquered</a>
                                                </div>

                                                <div className="wishlist-item-time">June 6, 2022</div>
                                            </td>

                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;