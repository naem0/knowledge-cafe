import React from 'react';
import profilelogo from '../../assets/client.png'
import './Header.css'

const Header = () => {
    return (
        <header className='d-flex justify-content-between align-items-center my-4 header'>
           <h2>Knowledge Cafe</h2> 
           <nav className=''>
                <img className='headerimg' src={profilelogo} alt="" />
           </nav>
        </header>
    );
};

export default Header;