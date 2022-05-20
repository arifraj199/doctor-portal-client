import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const HomeContact = () => {
    return (
        <section 
        style={{
            background:`url(${appointment})`
        }}
        className=" text-center p-16"
        >
            <h3 className='text-primary'>Contact Us</h3>
            <h1 className='text-2xl text-white'>Stay connected with us</h1> 
            <div className='flex flex-col justify-center items-center mt-8'>
                <input type="email" placeholder="email" className="input w-full max-w-xs mb-2" />    
                <input type="password" placeholder="password" className="input w-full max-w-xs mb-2" />
                <textarea type="text" placeholder="Your Message" className="input w-full h-24 max-w-xs mb-2" />
                {/* <textarea className="textarea w-2/6" placeholder="Bio"></textarea>     */}
                <div className='mt-4'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div> 
        </section>
    );
};

export default HomeContact;