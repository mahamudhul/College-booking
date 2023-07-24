/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddReview = () => {
    const { id } = useParams();
    console.log(id)
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data)

        


        fetch("https://college-booking-server-mahamudhul.vercel.app/review", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Submitted Your Data',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div>
            <div>
                <p className='font-bold text-4xl text-center m-5'>Please add Review</p>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Name*</span>
                        </label>
                        <input type="text" placeholder="Candidate Name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Email*</span>
                        </label>
                        <input type="text" placeholder="Candidate Email"
                            {...register("email", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <label htmlFor="description" >
                            <span className="label-text font-semibold">Discription*</span>
                        </label>
                        <input type="text" {...register("text", { required: true })} placeholder="Write distription" className="input input-bordered w-full h-20 " />
                    </div>

                    <input className="btn btn-outline btn-success mt-4" type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;