import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { BeakerIcon, BriefcaseIcon, ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const header = document.getElementsByTagName('header')
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            header[0].classList.add('scroll-down')
        } else {
            header[0].classList.remove('scroll-down')
        }
        lastScroll = currentScroll
    })


    return (
        <header className=' w-full h-20 bg-purple-500 text-white'>
            <nav className='container mx-auto flex justify-between items-center h-full'>
                <h1 className='text-4xl font-semibold'>Brand <span>King</span></h1>
                <div className='flex gap-6 text-lg font-semibold'>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/allProduct'} >Products</Link>
                    <Link to={'/contactUs'}>Contact</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/logIn'}>Log In</Link>
                    <Link to={'/allCarts'}> <ShoppingBagIcon className='w-8 h-8' /><span className=' absolute top-7 ml-9'></span></Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;