import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({deleteDoctor,setDeleteDoctor,refetch}) => {
    const {name,email} = deleteDoctor;

    const handleDelete = () =>{
        const url = `http://localhost:5000/doctor/${email}`;
        fetch(url,{
            method:"DELETE",
            headers:{
              authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                toast.success("Delete doctor successful");
                setDeleteDoctor(null);
                refetch();
            }
        })
    }

    
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
             Are You Want to delete {name}!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
          <button onClick={()=>handleDelete()} class="btn btn-error">Delete</button>
            <label for="delete-confirm-modal" class="btn">
             Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
