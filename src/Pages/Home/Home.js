import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='lg:mx-10  container'>
            <Banner></Banner>
            <Products></Products>
            <Reviews ></Reviews>
        </div>
    );
};

export default Home;