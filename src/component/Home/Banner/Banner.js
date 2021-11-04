import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src='https://i.ibb.co/NnnfGCm/b1-1.jpg'
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src='https://i.ibb.co/17XzyWt/b2-1.jpg'
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  image w-100"
                        src='https://i.ibb.co/ySdH3fH/b4.jpg'
                        // src='https://i.ibb.co/R6zLvDH/b3-1.jpg'
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;