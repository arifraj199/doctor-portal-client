import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    // <div className='grid grid-cols-1 lg:grid-cols-3  gap-4 mb-14 px-16'>
    //     <div className='flex items-center bg-gradient-to-r from-secondary to-primary py-10 px-6 rounded-xl'>
    //         <img className='w-20 h-20 mr-4' src={clock} alt="" />
    //         <div className="info-detail ">
    //             <h4 className='text-white text-1xl mb-1 font-semibold'>Opening Hours</h4>
    //             <p className='text-slate-200 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    //         </div>
    //     </div >
    //     <div className='flex items-center bg-accent py-10 px-6 rounded-xl'>
    //     <img className='w-20 h-20 mr-4' src={marker} alt="" />
    //         <div className="info-detail">
    //             <h4 className='text-white text-1xl mb-1 font-semibold'>Visit Our Location</h4>
    //             <p className='text-slate-200 text-sm'>Brooklyn, NY 10036, United States.</p>
    //         </div>
    //     </div>
    //     <div className='flex items-center bg-gradient-to-r from-secondary to-primary py-10 px-6 rounded-xl'>
    //     <img className='w-20 h-20 mr-4' src={phone} alt="" />
    //         <div className="info-detail">
    //             <h4 className='text-white text-1xl mb-1 font-semibold'>Contact Us Now</h4>
    //             <p className='text-slate-200 text-sm'>+000 123 456789.</p>
    //         </div>
    //     </div>
    // </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center  mb-10">
      <InfoCard cardBg="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" cardText="Lorem ipsum dolor sit amet consectetur, adipisicing elit."  img={clock}></InfoCard>
      <InfoCard cardBg="bg-[#3d4451]" cardTitle="Visit Our Location"  cardText="Brooklyn, NY 10036, United States." img={marker}></InfoCard>
      <InfoCard cardBg="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact Us Now" cardText="Contact Us Now"  img={phone}></InfoCard>
    </div>
  );
};

export default Info;
