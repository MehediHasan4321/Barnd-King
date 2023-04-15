import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../../Firebase/Firebase.comfig';
const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [type,setType] = useState('password')
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

    const forgetPassword = e => {
        const email = emailRef.current.value
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSuccess('Check Your Email To Reset Your Password')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const singInWithGoogle = () => {
        const googleAuth = new GoogleAuthProvider
        signInWithPopup(auth, googleAuth)
            .then(result => {
                setSuccess('Sign in with Google Is Successfull')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleType = ()=>{
        if(type==='text'){
            setType('password')
        }
        else if(type === 'password'){
            setType('text')
        }
    }
    return (
        <div className='w-full h-[80vh] flex items-center justify-center '>
            <div className='w-96 h-auto py-12 shadow-xl px-4 space-y-4'>
                <form onSubmit={handelLogIn} className='space-y-4'>
                    <input className='w-full px-4 py-2 text-left outline-none rounded-md bg-gray-400 text-white text-lg font-semibold placeholder:text-white' placeholder='Enter Your Email' ref={emailRef} type="email" name="email" id="email" />
                    <div className=' relative text-white'>
                    <input className='w-full px-4 py-2 text-left outline-none rounded-md bg-gray-400 text-white text-lg font-semibold placeholder:text-white' placeholder='Enter Your Password' type={type} name="password" id="password" />
                    <span onClick={handleType} className=' absolute right-2 top-3'>{type==='password' ? <i class="fa-solid fa-eye"></i>:<i class="fa-solid fa-eye-slash"></i>}</span>
                    </div>
                    <input className='w-full rounded-md px-4 py-2 bg-purple-400 text-white text-lg font-semibold' type="submit" name="submit" id="submit" value={'Log In'} />
                </form>

                <div>
                    {success && <p className='text-green-400 text-center'><small>{success}</small></p>}
                    {error && <p className='text-red-500 text-center'><small>{error}</small></p>}
                </div>
                <div className=' flex gap-4 items-center'>
                    <p>Also Log In With ..... </p>
                    <span onClick={singInWithGoogle} className='text-purple-400 hover:text-purple-600 cursor-pointer text-2xl'>
                        <i class="fa-brands fa-google-plus-g"></i>
                    </span>
                    <span className='text-purple-400 cursor-pointer hover:text-purple-600 text-2xl'>
                        <i class="fa-brands fa-square-facebook"></i>
                    </span>
                    <span className='text-purple-400 cursor-pointer hover:text-purple-600 text-2xl'>
                        <i class="fa-brands fa-github"></i>
                    </span>
                </div>
                <div className='mt-4'>
                    <p>Don't Hava An Account? Or <Link to={'/signUp'}><span className=' text-purple-400'>Sign Up</span></Link> Or <span onClick={forgetPassword} className='text-purple-400 cursor-pointer'>Forget Password</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;