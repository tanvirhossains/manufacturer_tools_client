import React, { useEffect, useState } from 'react';
import Product from '../Pages/Home/Product';
import Purchase from '../Pages/Purchase/Purchase';

const UseProducts = () => {
    const [products, setProducts] = useState([])

    console.log(products)

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(product => setProducts(product))
    }, [])



    return (
        <div>



        </div>
    )
};

export default UseProducts;