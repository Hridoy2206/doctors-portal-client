import React from 'react';
import treatment from "../../../assets/images/treatment.png"
import PrimaryBtn from '../../Shared/PrimaryBtn';

const Terms = () => {
    return (
        <div class="hero min-h-screen bg-base-100 px-16">
        <div class="hero-content flex-col gap-10 lg:flex-row">
            <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 class="text-4xl text-gray-600 font-medium">Exceptional Dental Care, on Your Terms</h1>
            <p class="py-6 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit dolorum itaque ullam saepe et voluptatum a esse est perspiciatis libero necessitatibus soluta in tempore vero, magni voluptatibus nam. Magni.</p>
            <PrimaryBtn>get started</PrimaryBtn>
            </div>
        </div>
        </div>
    );
};

export default Terms;