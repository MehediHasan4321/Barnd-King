import { useLoaderData } from 'react-router-dom';
import Order from './Order/Order';
import { createContext, useEffect, useState } from 'react';
import { getOrderCart } from '../../CustomLoder/CustomLoder';
export const PriceContext = createContext(0)
const Carts = () => {
    const orderedCart = useLoaderData()
    const [cart, setCart] = useState(orderedCart)
    const [price, setPrice] = useState(0)
    const [delevary, setDelevary] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const [tax, setTax] = useState(0)
    const [payable, setPayable] = useState(0)

    useEffect(() => {
        let singlePrice = 0
        let shipping = 0
        for (const pro of cart) {
            const id = pro.id
            const quantity = getOrderCart()
            singlePrice += pro.price * quantity[id]
            shipping += pro.shipping
        }
        setPrice(singlePrice)
        setDelevary(shipping)
        const total = price + delevary
        setSubTotal(total)
        const totalTax = (subTotal * 15) / 100
        setTax(totalTax)
        const payabletotal = subTotal + tax
        setPayable(payabletotal)
    }, [cart, orderedCart, price, subTotal, tax, payable])

    // This function remove item from localStorage by takaing on id
    const removeDb = id => {
        const saveCart = getOrderCart()
        if (id in saveCart) {
            delete saveCart[id]
            localStorage.setItem('orderedCart', JSON.stringify(saveCart))
        }
    }
    // this function help us to filter cart from all cart also it can remove item by taking an id....
    
    const deleteItem = id => {
        const filterCart = (cart.filter(order => order.id !== id))
        setCart(filterCart)
        removeDb(id)
    }

    return (
        <PriceContext.Provider value={[setPrice, setDelevary]}>
            <div className='container mx-auto mt-32 grid grid-cols-4 gap-6 h-full'>
                <div className='col-span-3'>
                    {
                        cart.map(order => <Order key={order.id} order={order} deleteItem={deleteItem} />)
                    }
                </div>
                <div className=' col-span-1 border-2 relative min-h-[65vh]'>
                    <h1 className='text-2xl font-semibold p-6'>Total Order : {cart.length < 10 ? '0' + cart.length : cart.length}</h1>
                    <div>
                        {
                            cart.map(cart => <div key={cart.id} className='h-auto px-6 my-4 flex justify-between items-center text-xl'><p>{cart.name}</p><p>${cart.price * (getOrderCart()[cart.id])}</p></div>)

                        }
                    </div>
                    <div className='absolute bottom-0 w-full '>
                        <hr className='border-1 mx-2' />
                        <div className='px-6 my-4 flex justify-between items-center text-xl'>
                            <p>Delevary Charges :</p>
                            <p>${delevary.toFixed(2)}</p>
                        </div>
                        <div className='px-6 my-4 flex justify-between items-center text-xl'>
                            <p>Total Price :</p>
                            <p>${price.toFixed(2)}</p>
                        </div>
                        <hr className='border-1 mx-2' />
                        <div className='px-6 my-4 flex justify-between items-center text-xl'>
                            <p>Sub Total : </p>
                            <p>${subTotal.toFixed(2)}</p>
                        </div>
                        <div className='px-6 my-4 flex justify-between items-center text-xl'>
                            <p>Tax (15%):</p>
                            <p>${tax.toFixed(2)}</p>
                        </div>
                        <hr className='border-1 mx-2' />
                        <div className='px-6 my-4 flex justify-between items-center text-xl'>
                            <p>Payable Amount :</p>
                            <p>${payable.toFixed(2)}</p>
                        </div>
                        <button className=' py-2 text-center bg-purple-400 hover:bg-purple-500 text-white text-lg font-semibold w-full'>Confrome Order</button>
                    </div>
                </div>
            </div>
        </PriceContext.Provider>
    );
};

export default Carts;