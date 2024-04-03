import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";

const Header = () => {
  const [dropdown, setDropDown] = useState(false);
  const user = useSelector((store) => store.auth.userData);

  return (
    <>
      <div
        onClick={() => setDropDown(!dropdown)}
        className="bg-zinc-600 w-full flex items-center justify-between p-2"
      >
        <span className="font-bold text-white cursor-pointer p-4">
          Chat-app
        </span>
        <div className="text-white flex items-center space-x-8 mr-10">
          {/* <button className="bg-black p-2 rounded-lg">DarkMode</button> */}
          <img
            className="w-22 h-10 cursor-pointer"
            src={user?.profilePic}
            alt="profile"
          />
        </div>
      </div>
      <Dropdown isOpen={dropdown} />
    </>
  );
};

export default Header;
