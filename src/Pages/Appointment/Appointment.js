import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AppointmentSchedule from './AppointmentSchedule';

const Appointment = () => {
    const [date,setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AppointmentSchedule date={date}></AppointmentSchedule>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;