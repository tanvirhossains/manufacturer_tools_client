import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // const [product, ?]
    return (
        <div className='' >
            <h1 className='text-3xl text-green-600 font-extrabold text-center md:m-5'> Reviews container</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
                {
                    reviews.slice(0, 3).map((review, index) => <Review
                        key={index}
                        review={review}></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;