import React from 'react';


const ServiceCard = ({image, name}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-md mb-5 sm:mx-auto border">
            <figure class="pt-4">
                <img src={image} width={50}/>
            </figure>
            <div class="card-body items-center text-center p-4">
                <h2 class="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default ServiceCard;