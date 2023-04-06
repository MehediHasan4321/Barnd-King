import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { getOrderCart } from '../../../CustomLoder/CustomLoder';

const Order = ({ order,deleteItem }) => {
    const [catQuantity, setCartQuantity] = useState(1)
    const { name, img, id, price, quantity } = order

    const pluseQuantity = (id) => {
        const orderCart = getOrderCart()
        if (catQuantity < 5) {
            setCartQuantity(catQuantity + 1)
            const orderQuantity = orderCart[id];
            if (orderQuantity) {
                const newQuantity = orderQuantity + 1;
                orderCart[id] = newQuantity
            }
            
        }

        localStorage.setItem('orderedCart', JSON.stringify(orderCart))
    }
    const minusQuantity = (id) => {
        if (catQuantity > 1) {
            setCartQuantity(catQuantity - 1)
        }
    }
    
    return (
        <div className='w-2/3 border-2 my-8 rounded-md flex justify-between items-center relative'>
            <div className=' flex gap-4 items-center'>
                <img className='w-36 p-2' src={img} alt="Your ordered product images" />
                <div>
                    <h1 className='text-xl font-semibold'>{name}</h1>
                    <p className='text-lg font-semibold'>Price : ${price}</p>
                    <div>
                        <p className='text-lg font-semibold flex items-center gap-2'>Quantity :
                            <button onClick={() => minusQuantity(id)}> <MinusIcon className='w-5 h-5 bg-purple-300' /></button>
                            <span>{catQuantity}</span>
                            <button onClick={() => pluseQuantity(id)}><PlusIcon className='w-5 h-5 bg-purple-300' /> </button>
                        </p>
                    </div>
                </div>
            </div>
            <div className='mr-4 text-lg font-semibold'>
                <div className='flex justify-between items-center gap-6'>
                    <p>Price :</p><p>${price}</p>

                </div>
                <hr className='border-1' />
                <div className='flex justify-between items-center gap-6'>
                    <p>Quantity :</p><p>{catQuantity}</p>

                </div>
                <hr className='border-1' />
                <div className='flex justify-between items-center gap-6'>
                    <p>Total :</p><p>${price * catQuantity}</p>

                </div>
                <hr className='border-1' />
            </div>
            <TrashIcon onClick={()=>deleteItem(id)} className='w-5 h-5 absolute p-1 -top-4 -right-4 bg-purple-500 text-white rounded-full' />
        </div>
    );
};

export default Order;