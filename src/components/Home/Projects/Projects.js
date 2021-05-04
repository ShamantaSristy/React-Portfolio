import React from 'react';
import { Button } from 'react-bootstrap';
import knot from '../../../assets/the-knot.png';
import bloom from '../../../assets/bloomit.png';
import cityTransfer from  '../../../assets/city-transfer.png';
import alphaSports from '../../../assets/alpha-sports.png';
import knowCountries from '../../../assets/know-countries.png';
import portfolio from '../../../assets/portfolio.png';
import fancy from '../../../assets/fancy1.png';
import trip from  '../../../assets/dream-trip.png';
import aboutMe from '../../../assets/about-me.png';

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
                    <SwiperSlide><img class="img-fluid" src={knot} alt="" /></SwiperSlide><SwiperSlide><img src={bloom} alt=""/></SwiperSlide><SwiperSlide><img src={cityTransfer} alt="" /></SwiperSlide><SwiperSlide><img src={alphaSports} alt=""/></SwiperSlide><SwiperSlide><img src={knowCountries} alt=""/></SwiperSlide><SwiperSlide><img src={portfolio} alt=""/></SwiperSlide><SwiperSlide><img src={fancy} alt="" /></SwiperSlide><SwiperSlide><img src={trip} alt=""/></SwiperSlide><SwiperSlide><img src={aboutMe} alt=""/></SwiperSlide>
                </Swiper>
            </div>
            <div className="d-flex justify-content-center text-center pt-5">
                <Button>See More </Button>
            </div>
        </div>
    );
};

export default Projects;