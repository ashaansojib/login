import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav-link'>
            <Link className='p-2 font-xl pr-2 hover:text-blue-400' to="/">Home</Link>
            <Link  className='p-2 font-xl pr-2 hover:text-blue-400' to="/login">Login</Link>
            <Link  className='p-2 font-xl pr-2 hover:text-blue-400' to="/register">Register</Link>
        </div>
    );
};

export default Header;