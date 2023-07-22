/* eslint-disable no-unused-vars */
import React from 'react';
import { FaGoogle } from 'react-icons/fa';


const SocialLogIn = () => {
    return (
        <div>
            <div className="divider"></div>
            <div className='w-full text-center my-4'>
                <button className="btn btn-outline border-t-cyan-800 w-full">
                    <FaGoogle className='text-2xl'></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;