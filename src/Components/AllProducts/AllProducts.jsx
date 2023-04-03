import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct/SingleProduct';

const AllProducts = () => {
    const products = useLoaderData()
    return (
        <div className='grid grid-cols-4 mt-12'>
            <div className=' col-span-1'></div>
            <div className='col-span-3 flex flex-wrap gap-5'>
                {
                    products.map(product=><SingleProduct key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default AllProducts;