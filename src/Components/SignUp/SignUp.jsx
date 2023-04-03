import React from 'react';

const SignUp = () => {
    return (
        <div className='container mx-auto'>
            <div className='w-4/12 p-4 h-auto shadow-md mx-auto mt-12 space-y-4'>
                <div className='flex justify-between gap-2 items-center w-full pl-2'>
                    <h2 className='text-lg font-semibold'>First Name :</h2>
                    <input className='w-3/4 px-4 py-2 bg-purple-400 text-white text-lg font-semibold outline-none rounded placeholder:text-white' autoFocus type="text" placeholder='Enter Your First Name' name="" id="" />
                </div>
                <div className='flex justify-between gap-2 items-center w-full pl-2'>
                    <h2 className='text-lg font-semibold'>Last Name :</h2>
                    <input className='w-3/4 px-4 py-2 bg-purple-400 text-white text-lg font-semibold outline-none rounded placeholder:text-white' autoFocus type="text" placeholder='Enter Your Last Name' name="" id="" />
                </div>
                <div className='flex justify-between gap-2 items-center w-full pl-2'>
                    <h2 className='text-lg font-semibold'>Email :</h2>
                    <input className='w-3/4 px-4 py-2 bg-purple-400 text-white text-lg font-semibold outline-none rounded placeholder:text-white' autoFocus type="email" placeholder='Example@gmail.com' name="" id="" />
                </div>
                <div className='flex justify-between gap-2 items-center w-full pl-2'>
                    <h2 className='text-lg font-semibold'>Password :</h2>
                    <input className='w-3/4 px-4 py-2 bg-purple-400 text-white text-lg font-semibold outline-none rounded placeholder:text-white' autoFocus type="password" placeholder='Enter Your Password' name="" id="" />
                </div>
                <div className='flex justify-between gap-2 items-center w-full pl-2'>
                    <h2 className='text-lg font-semibold'>Confrum :</h2>
                    <input className='w-3/4 px-4 py-2 bg-purple-400 text-white text-lg font-semibold outline-none rounded placeholder:text-white' autoFocus type="password" placeholder='Reright Your Password' name="" id="" />
                </div>
                <input type="checkbox" name="" id="" /> Accepts All Termes And Conditions
                <button className='bg-purple-400 w-full py-2 text-white font-semibold text-lg rounded-md'>Sign Up</button>
            </div>
        </div>
    );
};

export default SignUp;