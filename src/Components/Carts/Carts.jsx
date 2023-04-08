import { useLoaderData } from 'react-router-dom';
import Order from './Order/Order';
import { createContext, useEffect, useState } from 'react';
import { getOrderCart } from '../../CustomLoder/CustomLoder';
export const PriceContext = createContext(0)
const Carts = () => {
    const [catQuantity, setCartQuantity] = useState(1)
    const orderedCart = useLoaderData()
    const [cart, setCart] = useState(orderedCart)
    const [price, setPrice] = useState(0)
    const [delevary,setDelevary] = useState(0)
    const [subTotal,setSubTotal] = useState(0)
    const [tax,setTax] = useState(0)
    const [payable,setPayable] = useState(0)
    
    useEffect(() => {
        let price = 0;
        let delevary = 0;
        for (const pro of cart) {
            price = price + pro.price
            delevary = delevary + pro.shipping
        }
        setPrice(price * catQuantity)
        setDelevary(delevary)
        const subtotal = price + delevary
        console.log(price,delevary)
        setSubTotal(subtotal)
        
        const taxs = subTotal * 15 /100
        setTax(taxs)
        const payabletotal = subTotal + taxs
        setPayable(payabletotal)

    }, [catQuantity, cart])
//console.log(subTotal)
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
        const orderCart = getOrderCart()
        if (catQuantity > 1) {
            setCartQuantity(catQuantity - 1)
            const orderQuantity = orderCart[id];
            if (orderQuantity) {
                const newQuantity = orderQuantity - 1;
                orderCart[id] = newQuantity
            }
        }
        localStorage.setItem('orderedCart', JSON.stringify(orderCart))
    }
    const removeDb = id => {
        const saveCart = getOrderCart()
        if (id in saveCart) {
            delete saveCart[id]
            localStorage.setItem('orderedCart', JSON.stringify(saveCart))
        }
    }
    const deleteItem = id => {
        const filterCart = (cart.filter(order => order.id !== id))
        setCart(filterCart)
        removeDb(id)
    }

    return (
        <PriceContext.Provider value={[catQuantity, setCartQuantity]}>
            <div className='container mx-auto mt-32 grid grid-cols-4 gap-6 h-full'>
                <div className='col-span-3'>
                    {
                        cart.map(order => <Order key={order.id} order={order} deleteItem={deleteItem} minusQuantity={minusQuantity} pluseQuantity={pluseQuantity} />)
                    }
                </div>
                <div className=' col-span-1 border-2 relative min-h-[60vh]'>
                    <h1 className='text-2xl font-semibold p-6'>Total Order : {cart.length < 10 ? '0' + cart.length : cart.length}</h1>
                    <div>
                        {
                            cart.map(cart => <div key={cart.id} className='h-auto px-6 my-4 flex justify-between items-center text-xl'><p>{cart.name}</p><p>${cart.price}</p></div>)

                        }
                    </div>
                    <div className='absolute bottom-0 w-full '>
                        <div className='px-6 my-4 flex justify-between items-center text-xl'>
                            <p>Delevary Charges :</p>
                            <p>${delevary}</p>
                        </div>
                        <div className='px-6 my-4 flex justify-between items-center text-xl'>
                            <p>Total Price :</p>
                            <p>${price}</p>
                        </div>
                        <hr className='border-1 mx-2' />
                        <div className='px-6 my-4 flex justify-between items-center text-xl'>
                            <p>Sub Total : </p>
                            <p>${subTotal}</p>
                        </div>
                        <div className='px-6 my-4 flex justify-between items-center text-xl'>
                            <p>Tax (15%):</p>
                            <p>${tax}</p>
                        </div>
                        <hr className='border-1 mx-2' />
                        <div className='px-6 my-4 flex justify-between items-center text-xl'>
                            <p>Payable Amount :</p>
                            <p>${payable}</p>
                        </div>
                        <button className=' py-2 text-center bg-purple-400 hover:bg-purple-500 text-white text-lg font-semibold w-full'>Confrome Order</button>
                    </div>
                </div>
            </div>
        </PriceContext.Provider>
    );
};

export default Carts;