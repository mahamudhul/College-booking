/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleCollege = () => {
    const [coll, setColl] = useState([])

    const { image, description, name, history, admission_date, rating, event, sports } = coll

    const { id } = useParams();
    console.log(coll)

    useEffect(() => {
        fetch(`colleges.json/${id}`)
            .then(res => res.json())
            .then(data => setColl(data))
    }, [])

    return (
        <div>
            <div >
                <p>data: {coll.length}</p>
                <img src={image} alt="" />
                <div className="card-body border border-spacing-x-6">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
                    <p>Research Works:{history}</p>
                    <p>Admission Date :{admission_date}</p>
                    <p>Event: {event}</p>
                    
                    <p>Rating: {rating}</p> 
                    {/* {/* <div className="card-actions justify-end">
                        <p>{description}</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SingleCollege;