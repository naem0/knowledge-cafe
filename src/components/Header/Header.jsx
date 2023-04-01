import React from 'react';
import profilelogo from '../../assets/client.png'
import './Header.css'

const Header = () => {
    return (
        <header className='d-flex flex-column flex-md-row justify-content-between align-items-center my-4 header'>
           <h2>Knowledge Cafe</h2> 
           <nav className='d-flex gap-4'>
                <a className='text-decoration-none text-black py-3' href="">Home</a>
                <a className='text-decoration-none text-black py-3' href="">Blog</a>
                <a className='text-decoration-none text-black py-3' href="">About</a>
                <img className='headerimg' src={profilelogo} alt="" />
           </nav>
        </header>
    );
};

export default Header;