import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className="about-section">
            <h1>About me</h1>
            <Container className="mt-3 text-center">
                <div class="shadow p-3 mb-5 bg-body rounded about-text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, sint temporibus veritatis quidem officiis distinctio laudantium harum necessitatibus hic fugiat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatum, minus repellat quia quos perspiciatis ad officiis assumenda aspernatur. Minima perspiciatis laborum iusto culpa consequuntur tenetur ullam aliquid. Vitae, quaerat.</p>
                </div>
            </Container>
        </div>
    );
};

export default About;