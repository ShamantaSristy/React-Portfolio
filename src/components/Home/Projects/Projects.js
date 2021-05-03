import React from 'react';
import { Button } from 'react-bootstrap';


// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./Projects.css";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);



const Projects = () => {
    return (
        <div className="swiper-section">
            <div className="d-flex justify-content-center text-center">
                <h1>My Projects</h1>
            </div>
            <div className="swiper-body">
                <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }} pagination={true} className="mySwiper">
                    <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" alt=""/></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" alt=""/></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" alt=""/></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" alt=""/></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-8.jpg" alt=""/></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-9.jpg" alt=""/></SwiperSlide>
                </Swiper>
            </div>
            <div className="d-flex justify-content-center text-center">
                <Button>See More </Button>
            </div>
        </div>
    );
};

export default Projects;