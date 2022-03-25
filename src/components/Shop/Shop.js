import './Shop.css';
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product product={product}/>)
                }
            </div>
            <div className="cart-container">
                <h4>HeY</h4>
            </div>
        </div>
    );
};

export default Shop;