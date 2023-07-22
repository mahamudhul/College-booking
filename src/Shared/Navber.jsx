import React from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
    return (
        <div className="flex justify-around navbar  bg-slate-400 p-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/'>Instructors</NavLink></li>
                        <li><NavLink to='/'>Classes</NavLink></li>
                        <li><NavLink to='/login'>Login </NavLink></li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                    </ul>
                </div>

                <a className="btn btn-ghost normal-case text-3xl font-bold text-violet-700">𝓒-𝓑𝓸𝓸𝓴𝓲𝓷𝓰</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/'>Instructors</NavLink></li>
                    <li><NavLink to='/'>Classes</NavLink></li>
                    <li><NavLink to='/login'>Login </NavLink></li>
                    <li><NavLink to='/register'>Register</NavLink></li>

                </ul>
            </div>


            <div className="dropdown dropdown-end mx-5">
                <label tabIndex={0} className='btn btn-ghost btn-circle '>
                    {/* {
                        user ?
                            <>
                                <div className='w-10 rounded-full'>
                                    <img className='btn-circle' src={user?.photoURL} alt="" />
                                </div>
                            </> : <>
                                <NavLink to='/login'><button className="btn btn-active btn-accent">Login</button></NavLink>
                            </>
                    } */}
                    <NavLink to='/login'><button className="btn btn-active btn-accent">Login</button></NavLink>
                </label>
                {/* {user && <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <button onClick={handleLogOut} className="btn btn-accent">Logout</button>
                </ul>} */}
            </div>
        </div>
    );
};

export default Navber;