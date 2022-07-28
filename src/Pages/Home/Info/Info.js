import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../../assets/icons/clock.svg"
import marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/white-phone-icon_23-2147627279.svg"

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-10 pb-5 '>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" image={clock} infoTitle="Opening hours"></InfoCard>
            <InfoCard bgClass="bg-accent" image={marker} infoTitle="Visit Our location"></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" image={clock} infoTitle="Contact us now"></InfoCard>
        </div>
    );
};

export default Info;