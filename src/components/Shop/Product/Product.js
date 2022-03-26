import './Product.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {img, name, price} = props.product;
    const {click} = props;
    return (
        <div className='product-container'>
            <div className='product'>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>Price: {price}</p>
            </div>
            <button onClick={() => {click(props.product)}} className='cart-btn'>
                <p>BuY Now</p> <FontAwesomeIcon icon={faShoppingBasket}/>
            </button>
        </div>
    );
};

export default Product;