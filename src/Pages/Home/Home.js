import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Service from './Service/Service';
import MakeAppointment from './MakeAppointment';
import HomeContact from './HomeContact';
import Reviews from './Reviews';
import Footer from '../Shared/Footer/Footer';



const Home = () => {
    return (
        <div 
       
        className='sm:px-8 lg:px-12'
        >
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
            <HomeContact></HomeContact>
            <Footer></Footer>
        </div>
    );
};

export default Home;