import React from 'react';
import Typical from 'react-typical'
import './Intro.css';


const Intro = () => {
    return (
        <div className="d-flex justify-content-center align-items-center intro">
            <div>
                <h1>Hello, I'm Sristy</h1>
            </div>
            <div>
                <p>I am a{' '}
                    <Typical
                        // steps={['Hello', 1000, 'Hello world!', 500]}
                        loop={Infinity}
                        wrapper="b"
                        steps={['Front-End Developer', 1000, 'Javascript Enthusiast', 1000, 'Learner', 1000, 'Book Lover', 1000]}
                    />
                </p>
            </div>
        </div>
    );
};

export default Intro;