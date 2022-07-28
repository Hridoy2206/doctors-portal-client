import React from 'react';


const InfoCard = ({image, infoTitle, bgClass}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl mx-auto ${bgClass}`}>
        <figure><img src={image} width={60} alt="Album" className='pl-4' /></figure>
        <div class="card-body text-white">
            <h2 class="card-title">{infoTitle}</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
        </div>
        </div>
    );
};

export default InfoCard;