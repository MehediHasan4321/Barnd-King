import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../../Firebase/Firebase.comfig';
const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef = useRef()
    const auth = getAuth(app);

    const handelLogIn = e => {
        e.preventDefault()
        setError('')
        setSuccess('')
        const email = e.target.email.value;
        const password = e.target.password.value
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setSuccess('Log In successful')
            })
            .catch(error => {
                setError(error.message)
            })

            e.target.reset()
    }

    const forgetPassword = e=>{
        const email= emailRef.current.value
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            setSuccess('Check Your Email To Reset Your Password')
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    return (
        <div className='w-full h-[80vh] flex items-center justify-center '>
            <div className='w-96 h-auto py-12 shadow-xl px-4'>
                <form onSubmit={handelLogIn} className='space-y-4'>
                    <input className='w-full px-4 py-2 text-left outline-none rounded-md bg-gray-400 text-white text-lg font-semibold placeholder:text-white' placeholder='Enter Your Email' ref={emailRef} type="email" name="email" id="email" />
                    <input className='w-full px-4 py-2 text-left outline-none rounded-md bg-gray-400 text-white text-lg font-semibold placeholder:text-white' placeholder='Enter Your Password' type="password" name="password" id="password" />
                    <input className='w-full rounded-md px-4 py-2 bg-purple-400 text-white text-lg font-semibold' type="submit" name="submit" id="submit" value={'Log In'} />
                </form>
                <div className='mt-4'>
                    <p>Don't Hava An Account? Or <Link to={'/signUp'}><span className=' text-purple-400'>Sign Up</span></Link> Or <span onClick={forgetPassword}className='text-purple-400 cursor-pointer'>Forget Password</span></p>
                </div>
                <div>
                    {success && <p className='text-green-400 text-center'><small>{success}</small></p>}
                    {error && <p className='text-red-500 text-center'><small>{error}</small></p>}
                </div>
            </div>
        </div>
    );
};

export default Login;