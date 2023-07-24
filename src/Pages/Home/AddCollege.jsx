/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


// const img_hosting_token = import.meta.env.VITE_Image_Upload_token;


const AddCollege = () => {
    const { register, handleSubmit, reset } = useForm();
    // const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const { id } = useParams();
    // console.log(id)




    const onSubmit = data => {
        console.log(data)
        


        fetch("https://college-booking-server-mahamudhul.vercel.app/colleges", {
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
            <h1>here is add college</h1>
            <div className='m-20'>
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
                            <span className="label-text font-semibold">Subject*</span>
                        </label>
                        <input type="text" placeholder="subject"
                            {...register("subject", { required: true, maxLength: 120 })}
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
                        <label className="label">
                            <span className="label-text font-semibold">Phone Number*</span>
                        </label>
                        <input type="number" {...register("number", { required: true })} placeholder="Candidate Phone Number" className="input input-bordered w-full " />
                    </div>

                    <div className="flex my-4">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Date of birth*</span>
                            </label>
                            <input type="availableSeats" {...register("birthDate", { required: true })} placeholder="date of birth" className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Address*</span>
                            </label>
                            <input type="text" {...register("address", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                    </div>

                    {/* <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div> */}

                    <input className="btn btn-outline btn-success mt-4" type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddCollege;