import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import LoadingSpinner from "../Shared/LoadingSpinner";
import UserRow from "./UserRow";

const User = () => {

  const { data: users, isLoading,refetch } = useQuery("users", () =>
    fetch("http://localhost:5000/users",{
        method:"GET",
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

 
  return (
    <div>
      <h2>All User:{users?.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
                // <tr>
                //     <th>1</th>
                //     <td>{user.email}</td>
                //     <td><button onClick={makeAdmin} class="btn btn-sm">Make Admin</button></td>
                //     <td><button class="btn btn-sm">Remove</button></td>
                // </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
