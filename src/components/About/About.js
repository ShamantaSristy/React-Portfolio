import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import './About.css';

const About = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="about-section">
                <h1 className="pt-5">About me</h1>
                <Container className="mt-3 text-center">
                    <div class="shadow p-3 mb-5 bg-body rounded about-text">
                        <p>I'm a MERN-stack Developer from Bangladesh who has a serious passion and dedication for building dynamic and responsive websites. I consider myself a hardworking person and honest in my work. I am energetic and flexible in my working hours. I am always eager to learn new skills. I have passion for UI effects and animation. </p>
                    </div>
                    <div>
                        <h1 className="pt-5">My skills</h1>
                    </div>
                    <div className="pt-5">
                        <div class="row">
                            <div class="t-van-pill">React</div>
                            <div class="r-van-pill">Javascript(ES6)</div>
                            <div class="p-van-pill">HTML5</div>
                            <div class="o-van-pill">CSS3</div>
                            <div class="t-van-pill">Bootstrap5</div>
                            <div class="r-van-pill">Material UI</div>
                            <div class="p-van-pill">Node.js</div>
                            <div class="o-van-pill">Express.js</div>
                            <div class="p-van-pill">MongoDB</div>
                            <div class="o-van-pill">Firebase</div>
                            <div class="t-van-pill">Heroku</div>
                            <div class="r-van-pill">Netlify</div>
                            <div class="t-van-pill">Git</div>
                            <div class="r-van-pill">npm</div>
                            <div class="p-van-pill">Visual Studio Code</div>
                        </div>
                    </div>
                    <div>

                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;