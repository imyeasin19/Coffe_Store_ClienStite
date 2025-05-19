import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const data = useLoaderData();
    const {name,quantity,supplier,photo,price} = data;
    return (
        <div className='bg-[#F4F3F0] mt-20'>
            <div className='flex items-center p-20 gap-20 justify-center'>
                <img className='' src={photo} alt="" />
                <div className='text-2xl'>
                    <p>Name: {name}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;