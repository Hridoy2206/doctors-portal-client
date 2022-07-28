import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div class="card lg:max-w-96 bg-base-100 shadow-lg">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length === 0 ? 
                        <span className=' text-red-500'>Try another day</span>
                         : 
                        <span>{slots[0]}</span>
                    }
                </p>
                <p className='font-medium text-gray-500'>{slots.length} {slots.length >0 ? "Spaces": "Space"} Available</p>
                <div class="card-actions">
                <label for="booking-modal" 
                class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white"
                disabled={slots.length===0}
                onClick={()=> setTreatment(service)}
                >BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default Service;