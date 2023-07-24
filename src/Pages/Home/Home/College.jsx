/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import img1 from '../../../assets/college1.avif'
import img2 from '../../../assets/college2.avif'
import img3 from '../../../assets/cambridge.avif'
import { Link } from 'react-router-dom';


const College = () => {
    return (
        <div className='mx-10 my-5'>
            <div className='flex justify-around gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="college" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold mb-3 ">Imperial College London</h2>

                        <p> <span className='font-bold'>Admission Dates:</span> August 15 - August 31</p>
                        <p><span className='font-bold'>Upcoming Events:</span> August 23 - Freshers' Welcome Party</p>
                        <p ><span className='font-bold'>Research History:</span> Established in 1920, pioneering research in various fields.</p>
                        <p ><span className='font-bold'>Sports:</span> Football, Basketball, Volleyball, and more.</p>

                        <div className="card-actions justify-center">
                            <Link ><button className="btn btn-primary">Details</button>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="college" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold mb-3">Harvard University</h2>

                        <p> <span className='font-bold'>Admission Dates:</span> September 1 - September 15</p>
                        <p ><span className='font-bold'>Upcoming Events:</span> September 8 - Career Fair</p>
                        <p><span className='font-bold'>Research History:</span> Leading in scientific breakthroughs since 1945.</p>
                        <p><span className='font-bold'>Sports:</span> Soccer, Tennis, Swimming, and more.</p>

                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="college" /></figure>
                    <div className="card-body">

                        <h2 className="card-title text-2xl font-bold mb-3">Stanford University</h2>
                        <p> <span className='font-bold'>Admission Dates:</span> July 1 - July 31</p>
                        <p ><span className='font-bold'>Upcoming Events:</span> July 15 - Annual Alumni Reunion</p>
                        <p><span className='font-bold'>Research History:</span> Celebrating 100 years of academic excellence.</p>
                        <p><span className='font-bold'>Sports:</span> Cricket, Badminton, Athletics, and more.</p>

                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default College;