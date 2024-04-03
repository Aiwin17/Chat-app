import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Messages from "../components/Messages";
import { useSelector } from "react-redux";

const Home = () => {
  const userInfo = useSelector((store) => store.auth.userData);

  const navigate = useNavigate();

  useEffect(() => {
    auth();
  }, []);

  const auth = () => {
    if (!userInfo) {
      navigate("/login");
      return;
    }
    navigate("/");
  };

  return (
    <div className="flex justify-center my-12 ">
      <div className="w-[900px] h-[600px] bg-gray-700 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
        <div className="flex h-full">
          <Sidebar />
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default Home;
