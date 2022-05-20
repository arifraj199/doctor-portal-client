import React from "react";
import { format } from "date-fns";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { toast } from 'react-toastify';

const BookingAppointment = ({ date, treatment,setTreatment,refetch }) => {
  const [user] = useAuthState(auth);
  const { _id,name, slots } = treatment;
//   console.log(date);

    const handleBooking = event =>{
        event.preventDefault();
        const timeSlot = event.target.slot.value;
        const formattedDate = format(date,"PP");
        console.log(timeSlot,_id,name,date);

        const booking = {
          treatmentId:_id,
          treatment:name,
          date:formattedDate,
          slot:timeSlot,
          patientEmail:user.email,
          patientName:user.name,
          phone:event.target.phone.value
        }

        fetch('http://localhost:5000/booking',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.success){
            toast(`Your Appointment on,${formattedDate} at ${timeSlot}`)
          }else{
            toast.error(`Already have an appointment on ${formattedDate} at ${timeSlot}`)
          }
          refetch();
          setTreatment(null)
        })

        
    }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className=" text-lg my-3">
            Booking Treatment:{" "}
            <span className="text-secondary font-bold">{name}</span>
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-2 justify-items-center ">
            <input
              type="text"
              disabled
              name="date"
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              {
                  slots.map((slot,index)=><option key={index} slot={slot}>{slot}</option>)
              }
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              disabled
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingAppointment;
