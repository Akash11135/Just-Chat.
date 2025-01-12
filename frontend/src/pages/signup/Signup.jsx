import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";

function Signup() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const { loading, signUp } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-black"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered  h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-black">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10 text-black"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-black">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-black">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckbox
            onCheckboxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />
          <Link
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-black"
            to="/login"
          >
            Already have an account?
          </Link>

          <div>
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <button className="btn btn-block btn-sm mt-2 border border-slate-700">
                Sign Up
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
