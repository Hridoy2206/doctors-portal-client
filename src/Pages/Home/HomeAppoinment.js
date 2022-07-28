import React from 'react';
import doctor from "../../assets/images/doctor.png"
import background from "../../assets/images/appointment.png"
import PrimaryBtn from '../Shared/PrimaryBtn';

const HomeAppointment = () => {
    return (
        <div className='flex justify-center items-center mt-10 mb-40' style={{backgroundImage: `url(${background})`}}>
            <div className='flex-1 lg:block'>
                <img className='mt-[-80px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <p className='text-secondary font-medium mb-2 pr-5'>appointment</p>
                <h1 class="text-3xl font-medium text-white">Make an appointment today</h1>
                <p class="py-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsam  lorem20 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <PrimaryBtn>appointment</PrimaryBtn>
            </div>
        </div>
    );
};

export default HomeAppointment;