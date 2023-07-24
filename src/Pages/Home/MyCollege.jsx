/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const MyCollege = () => {

    const [college, setCollege] = useState([])

    useEffect(() => {
        fetch("https://college-booking-server-mahamudhul.vercel.app/colleges")
            .then(res => res.json())
            .then(result => setCollege(result))
    }, [])


    return (
        <div>
            <p>All My colleges</p>
            <div className="overflow-x-auto bg-slate-500 rounded-lg bg-opacity-40 m-20">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Your Phone Number</th>
                            <th>Your Address </th>
                            <th>Action </th>
                        </tr>
                    </thead>

                    {
                        college.map((cl, index) => <tbody key={index}>
                            <tr >
                                <th>{index + 1}</th>
                                <td>{cl.name}</td>
                                <td>{cl.subject}</td>
                                <td>{cl.number}</td>
                                <td>{cl.address}</td>
                                <td>
                                    <Link to={`/review/${cl._id}`}>
                                        <button className="btn btn-info btn-sm hover:scale-x-110">Review</button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default MyCollege;