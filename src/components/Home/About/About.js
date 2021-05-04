import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className="about-section">
            <h1>Who's this girl</h1>
            <Container className="mt-3 text-center">
                <div class="shadow p-3 mb-5 bg-body rounded about-text">
                    <p> I am a MERN-stack developer , an electrical and electronic engineer and a learner who is passionate about learning new technologies, building dynamic websites, UI effects and animation.   </p>
                </div>
            </Container>
        </div>
    );
};

export default About;