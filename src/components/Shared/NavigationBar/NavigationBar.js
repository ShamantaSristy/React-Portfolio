import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <Navbar expand="lg" style={{ "backgroundColor": "#1a1a2e" }}>
                {/* <Navbar.Brand href="#home">The Knot</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link> <Link style={{ color: 'white', textDecoration: "none" }} to="/home">Home</Link> </Nav.Link>
                        <Nav.Link> <Link style={{ color: 'white', textDecoration: "none" }} to="/about">About</Link> </Nav.Link>
                        <Nav.Link> <Link style={{ color: 'white', textDecoration: "none" }} to="/projects">Projects</Link> </Nav.Link>
                        <Nav.Link> <Link style={{ color: 'white', textDecoration: "none" }} to="/blogs">Blogs</Link> </Nav.Link>
                        <Nav.Link style={{ color: 'white', textDecoration: "none" }} href="https://drive.google.com/file/d/1p9AzTqCsobtHYFrrnwaxpcf1RKhEqIi8/view?usp=sharing" target="_blank">Resume</Nav.Link>
                        {/* <Nav.Link> <Link style={{ color: '#16213e' }} to="/resume">Resume</Link>  </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;