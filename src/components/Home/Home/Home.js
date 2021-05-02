import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
// import Intro from './Intro';
import Projects from '../Projects/Projects';
import ParticleComponents from './ParticleComponents';

const Home = () => {
    return (
        <div>
             <ParticleComponents></ParticleComponents>
            <Navbar expand="lg" style={{"backgroundColor": "#e4e3e3"}}>
                {/* <Navbar.Brand href="#home">The Knot</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link> <Link style={{ color: '#16213e' }} to="/home">Home</Link> </Nav.Link>
                    <Nav.Link> <Link style={{ color: '#16213e' }} to="/about">About</Link> </Nav.Link>
                    <Nav.Link> <Link style={{ color: '#16213e' }} to="/projects">Projects</Link> </Nav.Link>
                    <Nav.Link> <Link style={{ color: '#16213e' }} to="/blogs">Blogs</Link> </Nav.Link>
                    <Nav.Link style={{ color: '#16213e' }} href="https://drive.google.com/file/d/1p9AzTqCsobtHYFrrnwaxpcf1RKhEqIi8/view?usp=sharing">Resume</Nav.Link>
                    {/* <Nav.Link> <Link style={{ color: '#16213e' }} to="/resume">Resume</Link>  </Nav.Link> */}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
           

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
    );
};

export default Home;