import React from 'react';

const Review = ({ review }) => {
    const { name, customerReview, date, email, img } = review

    return (

        <div>
            <div className='mb-5'>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
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
                        <p>{date}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;