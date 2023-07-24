/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllColleges = () => {
    const [college, setCollege] = useState([])

    useEffect(() => {
        fetch("colleges.json")
            .then(res => res.json())
            .then(result => setCollege(result))

    }, [])



    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-10'>All Colleges Collection</h1>
            <div className='grid grid-cols-3 gap-5 ms-16 my-12'>
                {
                    college.map((collegs, index) =>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='h-56 min-w-full' src={collegs.image} alt="college" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold mb-3">{collegs.name}</h2>

                                <p> <span className='font-bold'>Admission Dates:</span> {collegs.date}</p>

                                <p><span className='font-bold'>Rating:</span> {collegs.rating} </p>

                                <p ><span className='font-bold'>Number of Research :</span>{collegs.research_count}</p>


                                <div className="card-actions justify-center">
                                    <Link to={`/college/${collegs._id}`}><button className="btn btn-info btn-outline">Details</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllColleges;