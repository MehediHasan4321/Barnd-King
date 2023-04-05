import React from 'react';

const Order = ({ order }) => {
    const { name, img, id, price, quantity } = order
    return (
        <div className=' w-2/3 border-2 m-4 rounded-md'>
            <div className=' flex gap-4 items-center'>
                <img className='w-36 p-2' src={img} alt="Your ordered product images" />
                <div>
                    <h1 className='text-xl font-semibold'>{name}</h1>
                    <p className='text-lg font-semibold'>Price : ${price}</p>
                    <p className='text-lg font-semibold'>Quantity : {quantity ===0 ? 1 : quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default Order;