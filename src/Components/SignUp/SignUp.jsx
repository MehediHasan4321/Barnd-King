import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../Firebase/Firebase.comfig';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const auth = getAuth(app)

    const handleSubmit = e => {
        e.preventDefault()
        setError('')
        setSuccess('')
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.firstName.value + ' ' + e.target.lastName.value
        if (!password.length > 6) {
            setError('Set Password at lest 6 carecters')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setSuccess('User has created successfuly')
            })
            .catch(error => {
                setError(error.message)
            })
         e.target.reset()   
    }
    return (
        <div className='container mx-auto mt-32'>
            <form onSubmit={handleSubmit} className='w-4/12 p-4 h-auto shadow-md mx-auto mt-12 space-y-4'>
                <div className='flex justify-between gap-2 items-center w-full pl-2'>
                    <h2 className='text-lg font-semibold'>First Name :</h2>
                    <input className='w-3/4 px-4 py-2 bg-gray-400 text-white text-lg font-semibold outline-none rounded placeholder:text-white' autoFocus type="text" placeholder='Enter Your First Name' name="firstName" id="firstName" />
                </div>
                <div className='flex justify-between gap-2 items-center w-full pl-2'>
                    <h2 className='text-lg font-semibold'>Last Name :</h2>
                    <input className='w-3/4 px-4 py-2 bg-gray-400 text-white text-lg font-semibold outline-none rounded placeholder:text-white' type="text" placeholder='Enter Your Last Name' name="lastName" id="lastName" />
                </div>
                <div className='flex justify-between gap-2 items-center w-full pl-2'>
                    <h2 className='text-lg font-semibold'>Email :</h2>
                    <input className='w-3/4 px-4 py-2 bg-gray-400 text-white text-lg font-semibold outline-none rounded placeholder:text-white' type="email" placeholder='Example@gmail.com' name="email" id="email" />
                </div>
                <div className='flex justify-between gap-2 items-center w-full pl-2'>
                    <h2 className='text-lg font-semibold'>Password :</h2>
                    <input className='w-3/4 px-4 py-2 bg-gray-400 text-white text-lg font-semibold outline-none rounded placeholder:text-white' type="password" placeholder='Enter Your Password' name="password" id="password" />
                </div>
                <div className='flex justify-between gap-2 items-center w-full pl-2'>
                    <h2 className='text-lg font-semibold'>Confrum :</h2>
                    <input className='w-3/4 px-4 py-2 bg-gray-400 text-white text-lg font-semibold outline-none rounded placeholder:text-white' type="password" placeholder='Re-wright Your Password' name="rePassword" id="rePassword" />
                </div>
                {success && <p className='text-green-400 text-center'><small>{success}</small></p>}
                {error && <p className='text-red-500 text-center'><small>{error}</small></p>}
                <input type="checkbox" name="" id="" /> Accepts All Termes And Conditions
                <input type='submit' value={'Sing In'} className='bg-purple-400 w-full py-2 text-white font-semibold text-lg rounded-md' />
                <p>Already have an account? <span className='text-purple-400'><Link to={'/logIn'}>Sign In</Link></span></p>
            </form>
        </div>
    );
};

export default SignUp;