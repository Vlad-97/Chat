import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <span className='Search'> &#128269; </span>
            <div className='User1'></div>
            <span className='Header__title'>Riko Sapto Dimo</span>
            <select className='Header__text'>
                <option>Available</option>
                <option>--------</option>
                <option>--------</option>
            </select>
        </div>
    );
};

export default Header;