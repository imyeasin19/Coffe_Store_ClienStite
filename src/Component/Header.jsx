import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='text-center space-x-4 my-10 text-blue-900'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/addcoffee'>Add Coffee</NavLink>
        </div>
    );
};

export default Header;