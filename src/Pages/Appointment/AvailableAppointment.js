import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import Service from './Service';
import BookingModal from '../Home/Service/BookingModal';
const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h2 className='text-secondary mt-5 text-center font-medium text-xl'>Available Appointment on {format(date, "PP")}</h2>
            <div className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        service={service}
                        key={service._id}
                        setTreatment={setTreatment}
                        date={date}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} date={date}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;