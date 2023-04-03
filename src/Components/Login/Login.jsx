import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-full h-[80vh] flex items-center justify-center '>
            <div className='w-96 h-auto py-12 shadow-xl px-4 space-y-4 flex flex-col justify-center'>
                <input className='w-full px-4 py-2 text-left outline-none rounded-md bg-purple-400 text-white text-lg font-semibold placeholder:text-white' placeholder='Enter Your Email' type="email" name="" id="" />
                <input className='w-full px-4 py-2 text-left outline-none rounded-md bg-purple-400 text-white text-lg font-semibold placeholder:text-white' placeholder='Enter Your Password' type="password" name="" id="" />
                <button className='w-full rounded-md px-4 py-2 bg-purple-400 text-white text-lg font-semibold'>Log In</button>
                <div>
                    <Link to={'/signUp'}>Don't Hava An Account? Or Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;