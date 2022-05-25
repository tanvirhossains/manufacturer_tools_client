import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const { _id, name, img, price, description, quantity } = props.product

    const navigate = useNavigate()

    const handlePurchase = () => {
        navigate(`/purchase/${_id}`)
    }

    return (
        <div>
            <div className='border md:m-4'>
                <img src={img} alt="" />

                <div className='m-4'>
                    <h1>Name : {name} </h1>
                    <h1>Price: Per Pec {price} $ </h1>
                    <h1>Available Quantity = {quantity} are in stoke</h1>

                    <button onClick={handlePurchase} className='btn'>Purchase </button>
                </div>
            </div>


        </div>
    );
};

export default Product;

