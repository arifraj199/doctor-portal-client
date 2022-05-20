import React from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../../hooks/useToken";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const [token] = useToken(user || gUser);

  const onSubmit = async(data, event) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({displayName:data.name})
    event.target.reset();
  };

  let signInError;

  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-500 text-sm">
        {error?.message || gError?.message || updateError?.message}
      </p>
    );
  }

  if (loading || gLoading || updating){
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (token) {
    // console.log("user log in: ", user || gUser);
    navigate('/appointment');
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Sign Up</h2>

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
                autoComplete="off"
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
                autoComplete="off"
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

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      "Minimum eight characters, at least one letter, one number and one special character",
                  },
                })}
                type="password"
                placeholder="Enter Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500 text-sm">
                    {errors.password?.message}
                  </span>
                )}
              </label>
            </div>

            {signInError}

            <input
              className="btn w-full max-w-xs"
              type="submit"
              value="Sign Up"
            />
          </form>
          <p className="text-center">
            <small>
              Already have an account?{" "}
              <Link className="text-secondary" to="/login">
                Please Login
              </Link>
            </small>
          </p>

          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
