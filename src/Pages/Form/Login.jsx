/* eslint-disable no-unused-vars */
import React from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import img from '../../assets/undraw_login_re_4vu2 (1).svg'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogIn from '../../Components/SocialLogIn';





const Login = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={img} alt="" />
                    </div>


                    {/* ---Form-- */}
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-slate-400">
                        <p className="text-3xl font-bold m-5 text-center">Login now!</p>
                        <form  className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>


                                {/* <div>
                                    <input type={passwordVisible ? 'text' : 'password'}
                                        {...register("password", { required: true, minLength: 6 })} placeholder="password" className="input input-bordered" />
                                    <span className='inline-block  -ml-10' onClick={togglePasswordVisibility}>
                                        {passwordVisible ? (
                                            <BsEyeSlashFill className='text-2xl'></BsEyeSlashFill >
                                        ) : (
                                            <BsEyeFill className='text-2xl'></BsEyeFill>
                                        )}
                                    </span>
                                </div> */}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>

                            <SocialLogIn></SocialLogIn>
                        </form>
                        <p className='m-5'><small> Already have an account? <Link className='text-orange-500' to='/register'><span className='text-xl m-3 hover:text-orange-300'> Register</span></Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;