import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(value => setProducts(value))
    }, [])
    return (



        <div>
            <h1 className='text-3xl text-green-600 font-extrabold text-center m-5'>Products </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}></Product>)
                }
            </div>


        </div>
    );
};

export default Products;