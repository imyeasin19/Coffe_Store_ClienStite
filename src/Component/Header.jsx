import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='text-center space-x-4 my-10 text-blue-900'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/addcoffee'>Add Coffee</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/login'><button className='btn btn-primary'>Login</button></NavLink>
            <NavLink to='/register'><button className='btn btn-primary'>Register</button></NavLink>

        </div>
    );
};

export default Header;