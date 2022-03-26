import './Product.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, click}) => {
    const {img, name, price} = product;
    return (
        <div className='product-container'>
            <div className='product'>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>Price: {price}</p>
            </div>
            <button onClick={() => {click(product)}} className='cart-btn'>
                <p>BuY Now</p> <FontAwesomeIcon icon={faShoppingBasket}/>
            </button>
        </div>
    );
};

export default Product;