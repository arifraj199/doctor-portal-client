import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="sidebar-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
          <h2 className="text-3xl text-purple-500">Welcome to Dashboard</h2>
        <Outlet></Outlet>
      
      </div>
      <div class="drawer-side">
        <label for="sidebar-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to='/dashboard'>My Appointment</Link>
          </li>
          <li>
            <Link to='/dashboard/review'>My Reviews</Link>
          </li>
          <li>
            {admin && <>
              <Link to='/dashboard/user'>All User</Link>
              <Link to='/dashboard/addDoctor'>Add a Doctor</Link>
              <Link to='/dashboard/managedoctor'>Manage Doctors</Link>
            </>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
