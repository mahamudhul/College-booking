/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    const [college, setCollege] = useState([])


    useEffect(() => {
        fetch("colleges.json")
            .then(res => res.json())
            .then(result => setCollege(result))

    }, [])


    return (
        <div>
            <div>
                <p></p>
            </div>
            <div>
                <div className="overflow-x-auto m-20">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>College Name</th>
                                <th>Admission Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                college.map((colleges, index) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <tr>
                                        <th>{index + 1}</th>
                                        <th><img className='h-12 w-12 rounded-full hover:scale-125' src={colleges.image} alt="" /></th>
                                        <td>{colleges.name}</td>
                                        <td>{colleges.date}</td>
                                        <td>
                                            <Link to={`/addCollege/${colleges._id}`}>
                                                <button className="btn btn-outline btn-error">Admission</button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admission;