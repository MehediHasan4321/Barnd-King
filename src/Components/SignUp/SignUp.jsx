import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authentication } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [type, setType] = useState('password')
    const {createUserWithEmail} = useContext(authentication)
    const handleSingUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        createUserWithEmail(email,password)
        .then(()=>{
            setSuccess('User has created successfuly')
        })
        .catch(err=>{
            setError(err.message)
        })
    }


    const handleType = () => {
        if (type === 'text') {
            setType('password')
        }
        else if (type === 'password') {
            setType('text')
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Sign Up Now</h1>
                </div>
                <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSingUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" required name='name' placeholder="Enter Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name='email' placeholder="example@gmail.com" className="input input-bordered" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={type} required name='password' placeholder="Enter Your Password" className="input input-bordered outline-none" />
                            <span onClick={handleType} className=' absolute right-2 top-12'>{type === 'password' ? <i class="fa-solid fa-eye"></i> : <i class="fa-solid fa-eye-slash"></i>}</span>
                        </div>
                        <div>
                            {success && <p className='text-green-400 text-center'><small>{success}</small></p>}
                            {error && <p className='text-red-500 text-center'><small>{error}</small></p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className=" py-2 bg-purple-400 outline-none text-lg text-white rounded-xl">Sign Up</button>
                        </div>
                        {/* <div className=' flex justify-center gap-4 items-center'>
                            <span  title='Sign in with Google' className='text-purple-400 hover:text-purple-600 cursor-pointer text-2xl'>
                                <i class="fa-brands fa-google-plus-g"></i>
                            </span>
                            <span className='text-purple-400 cursor-pointer hover:text-purple-600 text-2xl' title='Sign in with Facebook'>
                                <i class="fa-brands fa-square-facebook"></i>
                            </span>
                            <span className='text-purple-400 cursor-pointer hover:text-purple-600 text-2xl' title='Sign in with Github'>
                                <i class="fa-brands fa-github"></i>
                            </span>
                        </div> */}
                        <label className="label">
                            <Link to={'/login'} className="label-text-alt text-purple-400 link link-hover">Already have an account? Sign IN</Link>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;