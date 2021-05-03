import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <div style={{ height: "100vh" }} className="about-section">
            <h1>About me</h1>
            <Container className="mt-3 text-center">
                <div class="shadow p-3 mb-5 bg-body rounded about-text">
                    <p>I'm a Front-End Developer from Bangladesh who has a serious passion and dedication for building websites and applications. I consider myself a hardworking person and honest in my work. I am energetic and flexible in my working hours. I am always eager to learn new skills. So, currently, I'm learning MERN and I want to be a Full-stack Developer.   </p>
                </div>
            </Container>
        </div>
    );
};

export default About;