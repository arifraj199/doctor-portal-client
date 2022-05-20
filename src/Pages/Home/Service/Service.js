import React from "react";
import ServiceCard from "./ServiceCard";
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/fluoride.png';
import ServiceCare from "./ServiceCare";


const Service = () => {
    const services = [
        {
            _id:1,
            name:"Fluoride Treatment",
            description:"",
            img:fluoride
        },
        {
            _id:2,
            name:"Cavity Filling",
            description:"",
            img:cavity
        },
        {
            _id:3,
            name:"Teeth Whitening",
            description:"",
            img:whitening
        }
    ]

  return (
    <div className="text-center my-24">
      <p className="uppercase text-primary font-semibold">Our Service</p>
      <h1 className="text-2xl">Service We Provide</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-5 justify-center">
        {/* <ServiceCard cardTitle="Fluoride Treatment" cardImg={fluoride}></ServiceCard>
        <ServiceCard cardTitle="Cavity Filling" cardImg={cavity}></ServiceCard>
        <ServiceCard cardTitle="Teeth Whitening" cardImg={whitening}></ServiceCard> */}
        {
            services.map(service=><ServiceCard
                key={service._id}
                service={service}
            ></ServiceCard>)
        }
      </div>
      <ServiceCare></ServiceCare>
    </div>
    
  );
};

export default Service;
