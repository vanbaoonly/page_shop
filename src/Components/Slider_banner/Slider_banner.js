import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "./Silder_banner.scss";

const Slider_banner = ({ arr_image, type }) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
    }



    return (
        <div className='slide'>
            <Slider {...settings}>
                {arr_image.map((image, key) => (
                    <img key={key + 1} src={image} alt="" />
                ))}
            </Slider>
        </div>
    );
};

export default Slider_banner;