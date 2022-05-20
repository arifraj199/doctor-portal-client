import React from 'react';
import quote from '../../assets/icons/quote.svg';
import ReviewItem from './ReviewItem';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

const Reviews = () => {
    const reviewData = [
        {
            _id:1,
            name:"Winson Herry",
            img:people1,
            location:"California",
            review:""
        },
        {
            _id:2,
            name:"Winson Herry",
            img:people2,
            location:"London",
            review:""
        },
        {
            _id:3,
            name:"Winson Herry",
            img:people3,
            location:"Paris",
            review:""
        }
    ]
    return (
        <div className='mb-48'>
            <div className='flex justify-between items-center sm:px-12 lg:px-0 mb-8'>
                <div>
                    <h2 className='uppercase text-primary font-bold'>Testimonial</h2>
                    <h1 className='text-2xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48 h-36' src={quote} alt="" />
                </div>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
                {
                    reviewData.map(review=><ReviewItem
                        key={review._id}
                        review={review}
                    ></ReviewItem>)
                }
            </div>
        </div>
    );
};

export default Reviews;