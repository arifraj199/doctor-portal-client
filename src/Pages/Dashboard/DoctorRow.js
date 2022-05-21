import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, setDeleteDoctor }) => {
  const { name, specialty, image } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label
          onClick={() => setDeleteDoctor(doctor)}
          for="delete-confirm-modal"
          class="btn btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
