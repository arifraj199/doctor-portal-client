import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section 
        style={{
            background:`url(${appointment})`
        }}
        className='flex justify-center items-center mt-48 mb-32'
        >
            <div className='flex-1'>
                <img className='mt-[-140px] hidden lg:block' src={doctor} alt="" />
            </div>
            <div className='sm:block lg:flex-1 text-white sm:w-full p-12 lg:pr-28'>
                <h4 className='text-primary font-bold pb-4'>Appointment</h4>
                <h1 className='text-2xl pb-4'>Make an appointment Today</h1>
                <p className='pb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;