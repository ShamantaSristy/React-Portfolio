import React from 'react';
import { Button } from 'react-bootstrap';
import knot from '../../../assets/the-knot.png';
import bloom from '../../../assets/bloomit.png';
import cityTransfer from '../../../assets/city-transfer.png';
import alphaSports from '../../../assets/alpha-sports.png';
import knowCountries from '../../../assets/know-countries.png';
import portfolio from '../../../assets/portfolio.png';
import fancy from '../../../assets/fancy1.png';
import trip from '../../../assets/dream-trip.png';
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
import { Link } from 'react-router-dom';

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
                    <SwiperSlide>
                        <a href="https://the-knot-1.web.app/">
                        <img class="img-fluid" src={knot} alt="" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://bloomit-72292.web.app/">
                        <img src={bloom} alt="" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://city-transfer-5231c.web.app/">
                        <img src={cityTransfer} alt="" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://clever-jones-de8866.netlify.app/">
                        <img src={alphaSports} alt="" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://frosty-curie-08e48c.netlify.app/">
                        <img src={knowCountries} alt="" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://objective-archimedes-bf1821.netlify.app/">
                        <img src={portfolio} alt="" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://shamantasristy.github.io/Fancy-slider/">
                        <img src={fancy} alt="" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://shamantasristy.github.io/DreamTrip/">
                        <img src={trip} alt="" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://shamantasristy.github.io/About-Me/">
                        <img src={aboutMe} alt="" />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="d-flex justify-content-center text-center pt-5">
                <Link to="/projects"><Button>See More</Button></Link>
            </div>
        </div>
    );
};

export default Projects;