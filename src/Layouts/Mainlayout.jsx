import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';

const Mainlayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-10/12 mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Mainlayout;