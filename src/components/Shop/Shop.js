import './Shop.css';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const cartClickHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        if(newCart.length === 5) {
            setCart(cart);
            alert("You Cann't Add More Then 4 Products")
        }
    }
    const randomClickHandler = (cart) => {
        const randomElement = cart[Math.floor(Math.random() * cart.length)];
        if(randomElement) {
            alert(randomElement.name)
        }
    }
    const deleteClickHandler = () => {
        setCart([])
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product._id} product={product} click={cartClickHandler} />)
                }
            </div>
            <div className="cart-container">
                <h4>Selected Products</h4>
                {
                    cart.map(cart => <Cart key={cart._id} cart={cart} />)
                }
                <button onClick={() => {randomClickHandler(cart)}} className='choose-btn'>Choose One For Me</button>
                <button onClick={deleteClickHandler} className='reset-btn'>Choose Again</button>
            </div>
        </div>
    );
};
export default Shop;