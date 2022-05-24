import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Product = (props) => {
    const { name, img, price, description,quantity } = props.product

    const navigate =useNavigate()

const handlePurchase = ()=>{
    navigate('/purchase')
}

    return (
        <div>
            <div className='border'>
                <img src={img} alt="" />

                <div className='m-4'>
                    <h1>Name : {name}</h1>
                    <h1>Price: {price} </h1>
                    <h1>Available Quantity = {quantity}</h1>
                    {/* <p><span className='text-2xl font-bold'>Description:</span> {description.slice(0, 60) + '...'}</p> */}
                    <button onClick={handlePurchase} className='btn'>Purchase </button>
                </div>
            </div>


        </div>
    );
};

export default Product;

