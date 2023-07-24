/* eslint-disable no-unused-vars */
import React from 'react';
import graduation1 from '../../../assets/graduation_1.jpg';
import graduation2 from '../../../assets/Graduation_2.webp';
import graduation3 from '../../../assets/graduation3.jpeg';
import graduation4 from '../../../assets/graduation_4.jpg';
import graduation5 from '../../../assets/graduation_5.jpg';
import graduation6 from '../../../assets/graduation_6.jpg';
import graduation7 from '../../../assets/Graduation_7.jpg';
import graduation8 from '../../../assets/Graduation_8.jpg';
import graduation9 from '../../../assets/-Graduation-center.jpg';

const Gallary = () => {
    return (
        <div>
            <div className='grid grid-cols-3 m-24 border  rounded-lg shadow-xl'>
                <img className='hover:scale-110 transition' src={graduation1} alt="" />
                <img className='min-h-full hover:scale-110 transition' src={graduation2} alt="" />
                <img className='min-h-full hover:scale-110 transition' src={graduation3} alt="" />
                <img className='hover:scale-110 transition' src={graduation4} alt="" />
                <img className='hover:scale-110 transition' src={graduation5} alt="" />
                <img className='hover:scale-110 transition' src={graduation6} alt="" />
                <img className='min-h-full hover:scale-110 transition' src={graduation7} alt="" />
                <img className='min-h-full hover:scale-110 transition' src={graduation8} alt="" />
                <img className='hover:scale-110 transition' src={graduation9} alt="" />
            </div>
        </div>
    );
};

export default Gallary;