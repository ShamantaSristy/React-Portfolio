import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <div>
                    <hr/>
                    
                </div>
                    <div class="social_links">

                        {/* <a href="https://www.instagram.com/developer_sah/">
                            <span class="fa-stack fa-lg ig combo">
                                <i class="fa fa-circle fa-stack-2x circle"></i>
                                <i class="fa fa-instagram fa-stack-1x fa-inverse icon"></i>
                            </span>
                        </a> */}
                        <a href="https://www.facebook.com/shamantasristy/" target="_blank">
                            <span class="fa-stack fa-lg fb combo">
                                <i class="fa fa-circle fa-stack-2x circle"></i>
                                <i class="fa fa-facebook fa-stack-1x fa-inverse icon"></i>
                            </span>
                        </a>
                        {/* <a href="#">
                            <span class="fa-stack fa-lg yt combo">
                                <i class="fa fa-circle fa-stack-2x circle"></i>
                                <i class="fa fa-youtube-play fa-stack-1x fa-inverse icon"></i>
                            </span>
                        </a> */}
                        <a href="https://mail.google.com/mail/u/?authuser=shamantasristy@gmail.com" target="_blank">
                            <span class="fa-stack fa-lg tw combo">
                                <i class="fa fa-circle fa-stack-2x circle"></i>
                                <i class="fa fa-envelope fa-stack-1x fa-inverse icon"></i>
                            </span>
                        </a>
                        <a href="https://github.com/ShamantaSristy" target="_blank">
                            <span class="fa-stack fa-lg gt combo">
                                <i class="fa fa-circle fa-stack-2x circle"></i>
                                <i class="fa fa-github fa-stack-1x fa-inverse icon"></i>
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/in/shamanta-sristy-1904681b1/" target="_blank">
                            <span class="fa-stack fa-lg tw combo">
                                <i class="fa fa-circle fa-stack-2x circle"></i>
                                <i class="fa fa-linkedin fa-stack-1x fa-inverse icon"></i>
                            </span>
                        </a>
                    </div>
                    <div className="text-center" style={{"backgroundColor": "#1a1a2e", color:"aliceblue"}}>
                    <small>©ShamantaSristy-2021</small>
                    </div>
            </div>
            </div>
    );
};

export default Footer;