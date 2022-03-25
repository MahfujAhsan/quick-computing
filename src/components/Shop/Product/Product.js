import './Product.css';
import React, { useState } from 'react';

const Product = (props) => {
    const {img, name, price} = props.product;
    return (
        <div className='product-container'>
            <div className='product'>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>Price: {price}</p>
            </div>
            <button className='cart-btn'>
                <p>BuY Now</p>
            </button>
        </div>
    );
};

export default Product;