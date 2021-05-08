import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import BlogsCard from './BlogsCard';

const blogData = [
    {
        title: '10 Important JavaScript Concepts for Interview',
        description: 'By default, javascript considers some values as true and the others false. Almost all values other than 0 and ""(empty string) are considered true in Javascript.       ',
        url: 'https://dev.to/shamantasristy/10-important-javascript-concepts-for-interview-25ia'
    },
    {
        title: 'A Deep Dive in JSX',
        description: 'To know JSX in-depth, we should have a clear idea of what is JSX and is used? The full form of JSX is Javascript XML. To clear the whole JSX concept first, we will discuss what is JSX?       ',
        url: 'https://dev.to/shamantasristy/a-deep-dive-in-jsx-44pj'
    },
    {
        title: '10 Interesting hacks about JS (ES6) Block Bindings',
        description: 'Today we are going to discuss an interesting topic of EcmaScript6(ES6), Block Bindings. This discussion is going to be about bindings variables to scope.       ',
        url: 'https://dev.to/shamantasristy/10-interesting-hacks-about-js-es6-block-bindings-pfp'
    },
    {
        title: '10 Mostly used Javascript string prototypes you need to know as a beginner',
        description: 'A string in javascript stores a series of characters, for example: "Harry Potter" . A sting can be anything inside a single or double quote. Today we will discuss some commonly used string prototypes of javascript.     ',
        url: 'https://dev.to/shamantasristy/10-mostly-used-javascript-string-prototypes-you-need-to-know-as-a-beginner-4god'
    }
]

const Blogs = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div style={{ backgroundColor: "#1a1a2e", color: "aliceblue", minHeight: "100vh" }}>
                <Container>
                    <h1 className="text-center pt-10 pb-10">My Blogs</h1>

                    <div className="gx-5">
                        {
                            blogData.map(blog => <BlogsCard blog={blog} key={blog.title}></BlogsCard>)
                        }
                    </div>

                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;