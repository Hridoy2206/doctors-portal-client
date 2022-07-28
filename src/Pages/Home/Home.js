import React from 'react';
import Banner from './Banner';
import HomeAppointment from './HomeAppoinment';
import Info from './Info/Info';
import Testimonial from './Testimonial';
import Service from './Service/Service';
import Terms from './Service/Terms';
import Contact from './Contact';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
           <Banner />
           <Info />
           <Service />
           <Terms />
           <HomeAppointment></HomeAppointment>
           <Testimonial></Testimonial>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;