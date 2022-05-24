import React, { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([])

    console.log(products)

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(product => setProducts(product))
    }, [])



    return <div>
        <h1 className='text-3xl text-green-600 font-extrabold text-center m-5'>Products </h1>
        <div className='grid grid-cols-3 gap-4'>
            
        </div>


    </div>
};

export default UseProducts;