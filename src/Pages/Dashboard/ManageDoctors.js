import React, { useState } from "react";
import { useQuery } from "react-query";
import LoadingSpinner from "../Shared/LoadingSpinner";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deleteDoctor,setDeleteDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <h2 className="text-3xl">All Doctors:{doctors.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
            doctors?.map((doctor, index) => (
              <DoctorRow
                key={doctor._key}
                doctor={doctor}
                index={index}
                refetch={refetch}
                setDeleteDoctor={setDeleteDoctor}
              ></DoctorRow>
            ))
            }
          </tbody>
        </table>
      </div>
      {
          deleteDoctor && <DeleteConfirmModal
          deleteDoctor={deleteDoctor}
          refetch={refetch}
          setDeleteDoctor={setDeleteDoctor}
          ></DeleteConfirmModal>
      }
    </div>
  );
};

export default ManageDoctors;
