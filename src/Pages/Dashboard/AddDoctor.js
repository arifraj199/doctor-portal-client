import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import LoadingSpinner from "../Shared/LoadingSpinner";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  const imageKey = "abba58955c881135661a7c54bf264eca";

  const onSubmit = async (data, event) => {
    console.log("data", data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url=`https://api.imgbb.com/1/upload?key=${imageKey}`;
    fetch(url,{
        method:"POST",
        body:formData
    })
    .then(res=>res.json())
    .then(result=>{
        console.log(result);
        if(result.success){
            const img = result.data.url;
            const doctor = {
                name:data.name,
                email:data.email,
                specialty:data.specialty,
                image:img
            }
            //send data to the server
            const url = "http://localhost:5000/doctor";
            fetch(url,{
                method:"POST",
                headers:{
                    'content-type':'application/json',
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(doctor)
            })
            .then(res=>res.json())
            .then(inserted => {
                console.log(inserted);
                if(inserted.insertedId){
                    toast.success("Doctor added successfully");
                    reset()
                }else{
                    toast.error("Failed to add doctor");
                }
            })
        }
    })
  };

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <h2 className="text-3xl text-teal-400">Add a Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            type="text"
            placeholder="Enter Name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="text-red-500">{errors.name?.message}</span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid email",
              },
            })}
            type="email"
            placeholder="Enter Email"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="text-red-500">{errors.email?.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-red-500">{errors.email?.message}</span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            class="select select-bordered w-full max-w-xs"
          >
            {services?.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
            type="file"
            placeholder="Enter Image"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="text-red-500">{errors.image?.message}</span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs"
          type="submit"
          value="Add Doctor"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
