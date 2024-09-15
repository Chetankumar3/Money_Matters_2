import React from 'react'
import Welcome from './Small components/Welcome'
import './Styling/Gallery.css'

import Slider from "react-slick";

function Gallery() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
  return (
    <div>
        <Welcome text="Gallery" />

        <div className="photos">
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
            <img src="/Gallery/Copy of DSC_8902.JPG" alt="Team Photo" />
        </div>
    </div>
  )
}

export default Gallery