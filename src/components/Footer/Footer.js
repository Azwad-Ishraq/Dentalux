import React from 'react';
import './Footer.css'
import facebook from './facebook.png'
import insta from './instagram.png'
import twit from './twitter.png'
const Footer = () => {
    return (
        <footer className='footer'>





            <div className="footer-text">
            <h1>THE BEST IN MODERN DENTIRSTRY</h1>
            <button className='header-btn'>Make an Appointment </button>
           <div className="social-icons">
           <img src={facebook} alt=""/>
            <img src={insta} alt=""/>
            <img src={twit} alt=""/>
           </div>
            </div>



            <footer>
                <p>Privacy Policy / dentalux © 2021 / All Rights Reserved</p>
            </footer>
        </footer>
    );
};

export default Footer;