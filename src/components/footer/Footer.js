import React from 'react';
import "./footer.css";
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
    return (
        <div className='footer'>
            <a href="#" className='footer__logo'>
                Jehovanie RAMANDRIJOEL
            </a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#serivces">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">

                <a href="https://www.facebook.com/jehovanie.ram.5">
                    <FaFacebook />
                </a>
                <a href="https://www.linkedin.com">
                    <FiInstagram />
                </a>
                <a href="https://twitter.com">
                    <IoLogoTwitter />
                </a>
            </div>

            <div className="footer__copyright">
                <small> &copy; Jheo : 16-04-2022 09:10:45</small>
            </div>
        </div>
    );
};

export default Footer;