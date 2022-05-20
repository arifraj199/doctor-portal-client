import React from "react";

const AppointmentService = ({ service,setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="card-title justify-center text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : <span className='text-red-400'>Try another date</span>}</p>
        <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
        <div className="card-actions justify-center">
          
          <label onClick={()=>setTreatment(service)} htmlFor="booking-modal" disabled={slots.length === 0} className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase text-white">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
