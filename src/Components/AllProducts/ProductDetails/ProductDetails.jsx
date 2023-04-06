import { CalendarDaysIcon, ChatBubbleBottomCenterIcon, CurrencyDollarIcon, InformationCircleIcon, MapIcon, MapPinIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState, } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getOrderCart } from '../../../CustomLoder/CustomLoder';

const ProductDetails = () => {
    const product = useLoaderData()
    const { name, id, img, price, ratings, ratingsCount, seller, stock, shipping } = product
    const [ratingStar, setRatingStar] = useState(
        <span className='text-purple-400 text-lg space-x-1'>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </span>
    )
    useEffect(() => {
        const fiveStar =
            <span className='text-purple-400 text-lg space-x-1'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
        const fourStar =
            <span className='text-purple-400 text-lg space-x-1'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </span>
        const threeStar =
            <span className='text-purple-400 text-lg space-x-1'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </span>

        if (ratings === 5) {
            setRatingStar(fiveStar)
        } else if (ratings === 4) {
            setRatingStar(fourStar)
        } else if (ratings === 3) {
            setRatingStar(threeStar)
        }
    }, [ratings])

    const handleProductCart = (id) => {
        let orderCart = getOrderCart()
        const quantity = orderCart[id]
        if (!quantity) {
            orderCart[id] = 1
        }

        localStorage.setItem('orderedCart', JSON.stringify(orderCart))
    }

    return (
        <div className='container mx-auto mt-24 gird grid-cols-4'>
            <div className='col-span-3 flex gap-5'>
                <div>
                    <img className=' h-96' src={img} alt="Product Images" />
                    <div className='flex gap-4 mt-12'>
                        <div className='w-20 h-20 border-2 '>
                            <img src={img} alt="" />
                        </div>
                        <div className='w-20 h-20 border-2 '>
                            <img src={img} alt="" />
                        </div>
                        <div className='w-20 h-20 border-2 '>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-around ml-4'>
                    <div className=' space-y-3'>
                        <h1 className='text-3xl font-semibold'>{name}</h1>
                        <p className='text-lg'>{ratingStar} || {ratingsCount} Ratings Counts</p>
                        <p className='text-lg'>Brand : {seller ? seller : 'No Brand'}</p>
                        <h1 className='text-3xl'>Price : ${price}</h1>
                    </div>
                    <div className='flex gap-4'>
                        <p className='mb-2'>Color Family:</p>
                        <div className='w-16 h-16 border-2 border-gray-300 hover:border-red-600'>
                            <img src={img ? img : 'not found'} alt="Color Variant images" />
                        </div>
                        <div className='w-16 h-16 border-2 border-gray-300 hover:border-red-600' >
                            <img src={img ? img : 'not found'} alt="Color Variant images" />
                        </div>
                        <div className='w-16 h-16 border-2 border-gray-300 hover:border-red-600'>
                            <img src={img ? img : 'not found'} alt="Color Variant images" />
                        </div>
                    </div>
                    <div>
                    <Link to='/allCarts'><button onClick={() => handleProductCart(id)} className='mx-2 w-48 bg-amber-400 px-4 py-2 text-center text-white text-lg'>Buy Now</button></Link>
                    
                        <button onClick={() => handleProductCart(id)} className='bg-amber-400 px-4 py-2 text-center w-48 text-white text-lg'>Add To cart</button>
                    </div>
                </div>
                <div className=' w-1/3 mx-auto bg-gray-100'>
                    <div className='p-4 sapce-y-3'>
                        <div className='flex justify-between'>
                            <p>Delivery</p>
                            <InformationCircleIcon className='w-6 h-6 text-purple-500' />
                        </div>
                        <div className=' flex justify-between items-center'>
                            <MapPinIcon className='w-6 h-6 text-purple-500' />
                            <p>Dhaka, Dhaka North, Banani<br /> Road No. 12 - 19</p>
                            <button className='text-purple-500'>Chenge</button>
                        </div>
                        <hr className=' border-1 my-3' />
                        <div className='flex justify-between items-center'>
                            <TruckIcon className='w-6 h-6 text-purple-500' />
                            <p>Standard Delivery</p>
                            <p>${shipping}</p>
                        </div>
                        <hr className=' border-1 my-3' />
                        <div className='flex justify-between items-center'>
                            <CurrencyDollarIcon className='w-6 h-6 text-purple-500' />
                            <p>Cashon Delevary Available</p>
                            <p></p>
                        </div>
                        <hr className=' border-1 my-3' />
                        <div className='flex justify-between mt-4'>
                            <small>Serviecs</small>
                            <InformationCircleIcon className='w-6 h-6 text-purple-500' />
                        </div>
                        <hr className=' border-1 my-3' />
                        <div className='flex justify-between mt-4'>
                            <CalendarDaysIcon className='w-6 h-6 text-purple-400' />
                            <div>
                                <p>7 Days Returns</p>
                                <small>Change of mind is not applicable</small>
                            </div>
                            <p></p>
                        </div>
                        <hr className=' border-1 my-3' />
                        <div className='flex justify-between mt-4'>
                            <ShieldCheckIcon className='w-6 h-6 text-purple-400' />
                            <div>
                                <p>Warranty not available</p>
                            </div>
                            <p></p>
                        </div>
                        <hr className=' border-1 my-3' />
                        <div className='flex justify-between items-center mt-4'>
                            <div>
                                <small>Sold By</small>
                                <p>Mehedi Hasan</p>
                            </div>
                            <ChatBubbleBottomCenterIcon className='w-6 h-6 text-purple-400 ' />
                        </div>
                        <hr className=' border-1 my-3' />
                        <div className='flex justify-between mt-4'>
                            <div className=' border-2 text-center h-24 w-32 flex flex-col justify-between p-2'>
                                <small>Positive Seller Ratings</small>
                                <h1 className='text-4xl font-semibold'>86%</h1>
                            </div>
                            <div className=' border-2 text-center h-24 w-32 flex flex-col justify-between p-2'>
                                <small>Ship on Time</small>
                                <h1 className='text-4xl font-semibold'>96%</h1>
                            </div>
                            <div className=' border-2 text-center h-24 w-32 flex flex-col justify-between p-2'>
                                <small>Chat Response Time</small>
                                <h1 className='text-4xl font-semibold'>100%</h1>
                            </div>
                        </div>
                        <hr className=' border-1 my-3' />
                        <div className='py-3 text-center'>
                            <Link to='/home' className='text-purple-400'>Visit Store</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;