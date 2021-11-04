import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items/Items';
import Review from '../Review/Review';
import WhyUs from '../WhyUs/WhyUs';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <WhyUs></WhyUs>
            <Review></Review>
        </div>
    );
};

export default Home;