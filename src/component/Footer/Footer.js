import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="row footer-body">
                <div className="col-12 col-lg-5 footer-info">
                    <h2 className="main-name">FoodGaTe</h2>
                    <p><i className="fas fa-map-marker-alt"></i> Shonirakhra,Opposite of Modhumita convension center-Dhaka</p>
                    <p>
                    FoodGatE owned and operated by Shohoj Limited, is a premium online and on-demand service provider committed to make your life convenient, easier and smarter.
                    </p>
                    <p><i className="fas fa-envelope-open-text"></i> sm123@gamil.com</p>

                </div>
                <div className='col-12 col-lg-2'></div>
                <div className="col-12 col-lg-5 link">
                    <h2>Quick Links</h2>
                    <Link to='/home'>Home</Link>
                    <Link to='/items'>Items</Link>
                    <Link to='/Gallery'>Photo Albums</Link>
                    <Link to='/Contact'>Contact us</Link>
                    <div>
                        <Link to='www.facebook.com'><i className="fab fa-facebook-square"></i></Link>
                        <Link to='www.whatsapp.com'><i className="fab fa-whatsapp-square"></i></Link>
                        <Link to='www.twitter.com'> <i className="fab fa-twitter-square"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;