'use client'
import React, {useState} from 'react';
import Slider from "react-slick";
import './MySlider'
import {productItem} from "@/interfaces/common";
import products from "@/pages/products";
import Image from "next/image";

const SyncSlider = ({product}: { product: productItem }) => {
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <button><i style={{fontSize: 16}} className="slick-arrow fa fa-angle-left"></i>
        </button>,
        nextArrow: <button><i style={{fontSize: 16}} className="slick-arrow fa fa-angle-right"></i>
        </button>,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
        ]
    }

    const settingsBig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <button type="button" data-role="none" className="slick-arrow slick-prev"
                           style={{display: "block"}}><i style={{color: 'black'}} className="fa fa-angle-left"></i>
        </button>,
        nextArrow: <button type="button" data-role="none" className="slick-arrow slick-next"
                           style={{display: "block"}}><i style={{color: 'black'}} className="fa fa-angle-right"></i>
        </button>,
        arrows: true,
        fade: true,
    }

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return <>
        <div className="col-md-2">
            <div className="content-thumbnail-scroll">
                <Slider asNavFor={nav1} ref={(slider2) => setNav2(slider2)} className={'slider-for'} {...settings}>

                    <div className="img-item slick-slide">
                        <span className="img-thumbnail-scroll">
                            <Image  style={{width:116, height:100}} width="600" height="600"
                                 src={process.env['NEXT_PUBLIC_MAIN_PATH_WITHOUT_API'] + product?.photo}
                                 alt={product.name}/>
                        </span>
                    </div>
                    {product.photos?.map(item => {
                        return   <div key={product.id} className="img-item slick-slide">
                        <span className="img-thumbnail-scroll">
                            <Image  style={{width:116, height:100}} width="600" height="600"
                                 src={process.env['NEXT_PUBLIC_MAIN_PATH_WITHOUT_API'] + item.photo}
                                 alt={product.name}/>
                        </span>
                        </div>
                    })}

                </Slider>
            </div>
        </div>
        <div className="col-lg-10 col-md-12">
            <div className="scroll-image main-image">
                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} className={'slider-nav'} {...settingsBig}>

                    <div className="img-item slick-slide">
                        <span className="img-thumbnail-scroll">
                            <Image style={{ height:600}} width="600" height="600"
                                 src={process.env['NEXT_PUBLIC_MAIN_PATH_WITHOUT_API'] + product.photo}
                                 alt={product.name}/>
                        </span>
                    </div>
                    {product.photos?.map(item => {
                        return   <div key={product.id} className="img-item slick-slide">
                        <span className="img-thumbnail-scroll">
                            <Image style={{height:600}} width="600" height="600"
                                 src={process.env['NEXT_PUBLIC_MAIN_PATH_WITHOUT_API'] + item?.photo}
                                 alt={product.name}/>
                        </span>
                        </div>
                    })}


                </Slider>
            </div>
        </div>

    </>
};

export default SyncSlider;