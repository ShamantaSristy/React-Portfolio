import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const Blogs = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div style={{backgroundColor:"#1a1a2e", color:"aliceblue", minHeight:"100vh"}}>
            <Container>
            <h1 className="text-center pt-10 pb-10">Blogs will be here soon...</h1>
        </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;