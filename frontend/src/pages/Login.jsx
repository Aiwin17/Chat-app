import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { login, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-zinc-500 h-72 w-96 flex flex-col justify-center items-center py-6 rounded-lg">
        <span className="font-bold text-white text-2xl mb-4">LOGIN</span>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center w-72">
            <input
              type="text"
              placeholder="username"
              className="w-full px-4 py-2 mb-4 border rounded-md"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="password"
              className="w-full px-4 py-2 mb-4 border rounded-md"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-blue-900">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
