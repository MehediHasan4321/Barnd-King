import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product, handleProductCart,productDetails }) => {
    const [start, setStart] = useState(
        <span className='text-purple-400 text-lg space-x-1'>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </span>
    )
    const { name, price, img, id, ratings } = product
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
            setStart(fiveStar)
        } else if (ratings === 4) {
            setStart(fourStar)
        } else if (ratings === 3) {
            setStart(threeStar)
        }
    }, [ratings])

    return (
        <Link onClick={()=>productDetails(id)} to={'/productDetails'}>
            <div className='w-96 h-[550px] border-2 rounded-md relative'>
                <img src={img} alt="single product images" />
                <div className=' absolute bottom-0 right-0 left-0'>
                    <div className='p-4'>
                        <h1 className='text-xl'>{name}</h1>
                        <div className=' flex justify-between items-center mt-6'>
                            <p className='text-lg font-semibold'>Price: ${price}</p>
                            {start}
                        </div>
                    </div>
                    {/* <div className=' flex gap-3'>
                        <button onClick={() => handleProductCart(id)} className='w-1/2 py-2 text-white bg-purple-400 text-center text-lg font-semibold rounded-md'>Product Details</button>
                        <button onClick={() => handleProductCart(id)} className='w-1/2 py-2 text-white bg-purple-400 text-center text-lg font-semibold rounded-md'>Add To Cart</button>
                    </div> */}
                </div>
            </div>
        </Link>
    );
};

export default SingleProduct;