import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentService from './AppointmentService';
import BookingAppointment from './BookingAppointment';
import { useQuery } from 'react-query'
import LoadingSpinner from '../Shared/LoadingSpinner';

const AppointmentSchedule = ({date}) => {
    // const [services,setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);

    const formattedDate = format(date,"PP");

    const {data:services,isLoading,refetch} = useQuery(['available',formattedDate],()=>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res=>res.json())
    )

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    
    return (
        <div className='my-10'>
            <h1 className="text-2xl text-center text-primary mb-8">Available Appointments on {format(date,"PP")}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service=><AppointmentService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                        
                    ></AppointmentService>)
                }
                {treatment && <BookingAppointment date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch}></BookingAppointment>}
            </div>
        </div>
    );
};

export default AppointmentSchedule;