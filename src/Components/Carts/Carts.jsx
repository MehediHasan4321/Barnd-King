import { useLoaderData } from 'react-router-dom';
import Order from './Order/Order';
import { useState } from 'react';
import { getOrderCart } from '../../CustomLoder/CustomLoder';

const Carts = () => {
   const orderedCart = useLoaderData()
   const [cart,setCart] = useState(orderedCart)
   const removeDb = id=>{
    const saveCart = getOrderCart()
    if(id in saveCart){
        delete saveCart[id]
        localStorage.setItem('orderedCart',JSON.stringify(saveCart))
    }
   }
   const deleteItem = id=>{
    const filterCart = (cart.filter(order=>order.id !== id))
    setCart(filterCart)
    removeDb(id)
   }
   
    return (
        
        <div className=' min-h-screen container mx-auto mt-24'>
            {
                cart.map(order=><Order key={order.id} order={order} deleteItem={deleteItem}/>)
            }
        </div>
    );
};

export default Carts;