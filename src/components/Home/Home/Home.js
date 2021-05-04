import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
// import Intro from './Intro';
import Projects from '../Projects/Projects';
import ParticleComponents from './ParticleComponents';

const Home = () => {
    return (
        <div>
            <div>
                <ParticleComponents></ParticleComponents>
                <NavigationBar></NavigationBar>
                <div>
                    <Intro></Intro>
                </div>
                <div>
                    <About></About>
                </div>
                <div>
                    <Projects></Projects>
                </div>
                <div>
                    <Contact></Contact>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;