import React from 'react';
import { Navigate } from 'react-router-dom';

const Product = (props) => {
    const { name, img, price, description } = props.product

    // const navigate =useNavigate()



    return (
        <div>
            <div className='border'>
                <img src={img} alt="" />

                <div className='m-4'>
                    <h1>Name : {name}</h1>
                    <h1>Price: {price} </h1>
                    <p><span className='text-2xl font-bold'>Description:</span> {description.slice(0, 60) + '...'}</p>
                    <button className='btn'>Purchase </button>
                    <Navigate to='/purchase'>Purchase</Navigate>
                </div>
            </div>


        </div>
    );
};

export default Product;

