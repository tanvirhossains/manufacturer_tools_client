import React from 'react';

const Review = ({ review }) => {
    const { name, customerReview, date, email, img, tool } = review

    return (

        <div>
            <div className='mb-5'>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div className='flex justify-around items-center'>
                            <div> <span className='font-bold text-1.5xl'>Tool Name:</span><span className='text-2xl font-bold text-teal-500'> {tool}</span></div>
                            <p className='flex justify-end'>{date}</p>
                        </div>

                        <p>{customerReview}</p>

                        <div className='flex  items-center'>
                            <div class="avatar">
                                <div class="w-24 m-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={img} alt='' />
                                </div>
                            </div>
                            <div className=''>
                                <p>{name}</p>
                                <p>{email}</p>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;