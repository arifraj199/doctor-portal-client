import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from '../src/Pages/Shared/Navbar';
import Home from '../src/Pages/Home/Home';
import About from '../src/Pages/About/About';
import Appointment from '../src/Pages/Appointment/Appointment';
import Reviews from '../src/Pages/Reviews/Reviews';
import ContactUs from '../src/Pages/ContactUs/ContactUs';
import Login from '../src/Pages/Login/Login/Login';
import SignUp from '../src/Pages/Login/SignUp/SignUp';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import RequireAdmin from './Pages/Login/RequireAdmin/RequireAdmin';
import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReviews from './Pages/Dashboard/MyReviews';
import User from './Pages/Dashboard/User';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appointment" element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}></Route>
        <Route path="/dashboard" element={
        <RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}
        >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReviews></MyReviews>}></Route>
          <Route path='user' element={<RequireAdmin>
            <User></User>
          </RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin>
            <AddDoctor></AddDoctor>
          </RequireAdmin>}></Route>
          <Route path='managedoctor' element={<RequireAdmin>
            <ManageDoctors></ManageDoctors>
          </RequireAdmin>}></Route>
        </Route>
        <Route path="/appointment" element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
