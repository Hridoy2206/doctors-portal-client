import React from 'react';
import bgImage from "../../assets/images/appointment.png"
import PrimaryBtn from '../Shared/PrimaryBtn';

const Contact = () => {
    return (
        <div style={{backgroundImage: `url(${bgImage})`}} className="mt-20" >
            <div className='text-center pt-10'>
            <p className="text-secondary">Connect Us</p>
            <h2 className="text-3xl font-medium text-white">Stay Connect with Us</h2>

            </div>
                <form style={{width:'50%', margin: 'auto', padding: "52px",paddingTop: "20px"}}>
                <div class="mb-6">
                    <input type="email" id="email" class="bg-gray-50 focus-border-secondary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your email" required=""/>
                </div>
                <div class="mb-6">
                    <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder='subject'/>
                </div>
                <div class="mb-6">
                    <textarea name="" id="" cols="50" className=' rounded-lg p-2' rows="5" placeholder='your message'></textarea>
                </div>
                <div className='text-center'>
                    <PrimaryBtn>submit</PrimaryBtn>
                </div>
                </form>
        </div>
    );
};

export default Contact;