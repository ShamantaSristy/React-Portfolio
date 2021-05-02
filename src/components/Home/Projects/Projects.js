import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./Projects.css";


// import Swiper core and required modules
import SwiperCore, {
    EffectCube, Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);


const Projects = () => {
    return (
        <div className="swiper-section">
            <div className="d-flex justify-content-center text-center">
            <h1>My Projects</h1>
            </div>
            <div className="swiper-body">
            <Swiper effect={'cube'} grabCursor={true} cubeEffect={{
                "shadow": true,
                "slideShadows": true,
                "shadowOffset": 20,
                "shadowScale": 0.94
            }} pagination={true} className="mySwiper">
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="first img" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="second img" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="third img"/></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="fourth img"/></SwiperSlide>
            </Swiper>
            </div>
            <div className="d-flex justify-content-center text-center">
            <Button>See More </Button>
            </div>
        </div>
    );
};

export default Projects;