import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png"

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({date, setDate}) => {
    
  return (
    <div style={{background: `url(${bg})`, backgroundSize: "cover"}}>
      <div class="hero min-h-screen p-10">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <img src={chair} class="max-w-sm rounded-lg shadow" />
          <div className="shadow-lg rounded-lg mr-14">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
