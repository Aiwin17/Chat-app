import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-zinc-500 h-96 w-96 flex flex-col justify-center items-center py-6 rounded-lg">
        <span className="font-bold text-white text-2xl mb-4">Signup</span>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center w-72">
            <input
              type="text"
              placeholder="Fullname"
              className="w-full px-4 py-2 mb-4 border rounded-md"
              value={inputs.fullname}
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 mb-4 border rounded-md"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-4 border rounded-md"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 mb-4 border rounded-md"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
            <div className="flex mb-4">
              <input
                type="checkbox"
                id="male"
                name="gender"
                className="mr-2"
                checked={inputs.gender === "male"}
                onChange={() => handleCheckBoxChange("male")}
              />
              <label htmlFor="male" className="text-white">
                Male
              </label>
              <input
                type="checkbox"
                id="female"
                name="gender"
                className="ml-6 mr-2"
                checked={inputs.gender === "female"}
                onChange={() => handleCheckBoxChange("female")}
              />
              <label htmlFor="female" className="text-white">
                Female
              </label>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-blue-900">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
