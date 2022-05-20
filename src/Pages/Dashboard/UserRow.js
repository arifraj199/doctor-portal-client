import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user,refetch }) => {
  const { email,role } = user;

  const makeAdmin = () => {
    fetch(`https://morning-fortress-41142.herokuapp.com/user/admin/${email}`,{
        method:"PUT",
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>{
        if(res.status === 403){
            toast.error('failed to make an admin')
        }
        return res.json()})
    .then(data=>{
        if(data.modifiedCount > 0){
            refetch();
        toast.success('make admin successful')
        }
    })
  };
  return (
    <tr>
    <th>1</th>
    <td>{user.email}</td>
    <td>
      {role !== 'admin' && <button onClick={makeAdmin} class="btn btn-sm">
        Make Admin
      </button>}
    </td>
    <td>
      <button class="btn btn-sm">Remove</button>
    </td>
  </tr>
  );
};

export default UserRow;
