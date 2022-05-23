import React from 'react';
import UseProducts from '../../Hooks/UseProducts';
import Banner from './Banner';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <UseProducts></UseProducts>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;