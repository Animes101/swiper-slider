import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './slider.css'


// import required modules
import { Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><div className="slider sl1">1</div></SwiperSlide>
        <SwiperSlide><div className="slider sl1">2</div></SwiperSlide>
        <SwiperSlide><div className="slider sl1">3</div></SwiperSlide>
        <SwiperSlide><div className="slider sl1">4</div></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
