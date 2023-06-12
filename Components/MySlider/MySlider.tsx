'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {PropsWithChildren} from "react";

const MySlider = ({settings,children, clazz}:PropsWithChildren<{settings:any,clazz?:string}>) => {
    return (
        <Slider className={clazz}  {...settings}>
            {children}
        </Slider>

    );
};

export default MySlider;