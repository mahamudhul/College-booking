/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Review = () => {

    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch("https://college-booking-server-mahamudhul.vercel.app/review")
            .then(res => res.json())
            .then(result => setReview(result))
    }, [])

    return (
        <div>
            <div className='bg-red-900 bg-opacity-50 p-5 border rounded my-10 mx-24 text-center'>
                <div className='text-center'>
                    <p className='font-bold text-2xl'>WHAT OUR CLIENTS SAY</p>
                </div>

                <div className='grid grid-cols-4 mt-5 '>
                    {
                        // eslint-disable-next-line react/jsx-key
                        reviews.map(review => <p className=' p-3 border-l-4 p-3'>"{review.text}" -  <span className='font-bold'>{review.name}</span>  </p>)
                    }
                </div>
                {/* <div className='grid grid-cols-4 mt-5 '>
                    <p className=' p-3'>"Chef John was amazing! He catered my daughter's wedding and everyone was raving about the food. He was professional, punctual, and his attention to detail was impeccable. Thank you Chef John for making our special day even more memorable." -  <span className='font-bold'>Sarah T.</span>  </p>

                    <p className='border-l-4 p-3'>"I had the pleasure of dining at Chef Maria's restaurant and the food was absolutely delicious. Each dish was crafted with care and bursting with flavor. The service was also excellent, and I can't wait to go back again soon!" - <span className='font-bold'> Robert L.</span></p>

                    <p className='border-l-4 p-3'>
                        "Chef Kim's cooking class was so much fun! She is incredibly knowledgeable and passionate about food, and she made the experience engaging and interactive. I learned so much and can't wait to try out the recipes at home." - <span className='font-bold'>Emily H.</span>
                    </p>
                    <p className='border-l-4 p-3'>
                        "Chef Carlos catered my anniversary party and I couldn't have been happier with the results. The food was absolutely amazing, and he went above and beyond to accommodate our dietary restrictions. I would highly recommend Chef Carlos to anyone looking for a talented and professional chef." - <span className='font-bold'>Mark D.</span>
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default Review;