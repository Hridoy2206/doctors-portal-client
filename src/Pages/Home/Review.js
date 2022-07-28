import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card lg:max-w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <p className='mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quam doloribus libero molestiae ducimus dolorum?</p>
          <div class="flex gap-5 items-center">
            <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={review.img} />
            </div>
            </div>
            <div>
                <h2 className="text-xl">{review.name}</h2>
                <p>{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;