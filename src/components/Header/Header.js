import './Header.css';
import logo from '../../images/logo.png'
import React from 'react';

const Header = () => {
    return (
        <div className='header-area'>
            <div className='header-container'>
                <img src={logo} alt="" />
                <h4>Quick Computing</h4>
                <p>(NOTE. You Can Choose Only <span className='limited-number'>4</span> Products)</p>
            </div>
        </div>
    );
};

export default Header;