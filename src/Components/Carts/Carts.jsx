import { useLoaderData } from 'react-router-dom';
import Order from './Order/Order';

const Carts = () => {
   const orderedCart = useLoaderData()
    return (
        <div className=' min-h-screen container mx-auto mt-24'>
            {
                orderedCart.map(order=><Order key={order.id} order={order}/>)
            }
        </div>
    );
};

export default Carts;