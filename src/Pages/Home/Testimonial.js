import React from 'react';
import quote from "../../assets/icons/quote.svg"
import people1 from "../../assets/images/people1.png"
import people2 from "../../assets/images/people2.png"
import people3 from "../../assets/images/people3.png"
import Review from './Review';

const Testimonial = () => {

    const reviews =[
        {
           _id: 1,
           review: '',
           name: "Wenson Herry",
           location: "california",
           img: people1
        },
        {
           _id: 2,
           review: '',
           name: "Wenson Herry",
           location: "california",
           img: people2
        },
        {
           _id: 3,
           review: '',
           name: "Wenson Herry",
           location: "california",
           img: people3
        },
    ]
    return (
      <div className='p-10'>
          <div className='flex justify-between mb-5'>
            <div>
                <p className='text-secondary font-medium'>testimonial</p>
                <h2 className='text-2xl font-medium text-gray-600'>What Our Patients Says</h2>
            </div>
            <div>
                <img className='w-24 lg:w-48' src={quote} alt="" />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                ></Review>)
            }
          </div>
      </div>
    );
};

export default Testimonial;