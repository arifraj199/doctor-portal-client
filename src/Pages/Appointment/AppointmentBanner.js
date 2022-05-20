import React from "react";
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from "date-fns";
import bg from '../../assets/images/bg.png';

const AppointmentBanner = ({date,setDate}) => {
    

    let footer = <p>Please pick a day</p>

    if(date){
        footer = <p>You Picked {format(date,"PP")}.</p> 
    }

  return (
    <div 
    style={{
      background:`url(${bg})`,
      backgroundSize:"cover",
      backgroundPosition:"center"
  }}
    className="hero min-h-screen px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl" alt="doctor chair"
        />
        <div className="mr-20 shadow-lg rounded-lg">
            <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            footer={footer}
            />;
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
