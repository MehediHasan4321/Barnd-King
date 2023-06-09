import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct/SingleProduct';

const AllProducts = () => {
    const products = useLoaderData()
    const [showProduct, setShowProduct] = useState(products)
    const MenSneaker = products.filter(pro => pro.category === "Men's Sneaker")
    const MenPants = products.filter(pro => pro.category === "Men's Pants");
    const Bags = products.filter(pro => pro.category === "Bag");
    const Caps = products.filter(pro => pro.category === "Cap")
    const Earphones = products.filter(pro => pro.category === "Earphones");
    const Bottle = products.filter(pro => pro.category === "Bottle")
    const MenBoots = products.filter(pro => pro.category === "Men's Boot")
    const Watch = products.filter(pro=>pro.category === 'smart-watch')

    const showProductHadler = (product) => {
        setShowProduct(product)
    }
    
    const productDetails=id=>{
        localStorage.setItem('productDetailId',id)
    }
    return (
        <div className=' grid grid-cols-4 mt-24 gap-4 bg-white'>
            <div className=' col-span-1 px-4 bg-slate-200 w-[300px] ml-auto h-screen sticky top-20 space-y-4'>
                <h1 className='text-xl text-center my-6'>All Catrgorys</h1>
                <div onClick={() => showProductHadler(MenSneaker)} className='flex justify-between items-center bg-purple-400 px-4 py-2 rounded-md text-lg text-white cursor-pointer'>
                    <li>Men's Sneaker</li>
                    <p>({MenSneaker.length})</p>
                </div>
                <div onClick={() => showProductHadler(MenPants)} className='flex justify-between items-center bg-purple-400 px-4 py-2 rounded-md text-lg text-white cursor-pointer'>
                    <li>Men's Pants</li>
                    <p>({MenPants.length})</p>
                </div>
                <div onClick={() => showProductHadler(MenBoots)} className='flex justify-between items-center bg-purple-400 px-4 py-2 rounded-md text-lg text-white cursor-pointer'>
                    <li>Men's Boot</li>
                    <p>({MenBoots.length})</p>
                </div>
                <div onClick={() => showProductHadler(Bags)} className='flex justify-between items-center bg-purple-400 px-4 py-2 rounded-md text-lg text-white cursor-pointer'>
                    <li>Fashionable Bags</li>
                    <p>({Bags.length})</p>
                </div>
                <div onClick={() => showProductHadler(Caps)} className='flex justify-between items-center bg-purple-400 px-4 py-2 rounded-md text-lg text-white cursor-pointer'>
                    <li>Fashionable Caps</li>
                    <p>({Caps.length})</p>
                </div>
                <div onClick={() => showProductHadler(Earphones)} className='flex justify-between items-center bg-purple-400 px-4 py-2 rounded-md text-lg text-white cursor-pointer'>
                    <li>Earphones</li>
                    <p>({Earphones.length})</p>
                </div>
                <div onClick={() => showProductHadler(Bottle)} className='flex justify-between items-center bg-purple-400 px-4 py-2 rounded-md text-lg text-white cursor-pointer'>
                    <li>Bottle</li>
                    <p>({Bottle.length})</p>
                </div>
                <div onClick={() => showProductHadler(Watch)} className='flex justify-between items-center bg-purple-400 px-4 py-2 rounded-md text-lg text-white cursor-pointer'>
                    <li>Watch</li>
                    <p>({Watch.length})</p>
                </div>
            </div>
            <div className='col-span-3 flex flex-wrap gap-5'>
                {
                    showProduct.map(product => <SingleProduct key={product.id} product={product} productDetails={productDetails}/>)
                }
            </div>
        </div>
    );
};

export default AllProducts;