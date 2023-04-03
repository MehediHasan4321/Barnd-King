import React from 'react';
import { Link } from 'react-router-dom';
import { BeakerIcon, BriefcaseIcon, ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
const Header = () => {
    return (
        <div className=' w-full h-20 bg-purple-500 text-white'>
            <nav className='container mx-auto flex justify-between items-center h-full'>
                <h1 className='text-4xl font-semibold'>Brand <span>King</span></h1>
                <div className='flex gap-6 text-lg font-semibold'>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/allProduct'} >All Product</Link>
                    <Link to={'/contactUs'}>Contact</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/logIn'}>Log In</Link>
                    <Link to={'/allCarts'}> <ShoppingBagIcon className='w-8 h-8'/><span className=' absolute top-7 ml-9'>$00</span></Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;