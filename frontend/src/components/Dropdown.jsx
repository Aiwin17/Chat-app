import React from "react";
import useLogout from "../hooks/useLogout";

const Dropdown = ({ isOpen }) => {
  const { logout } = useLogout();
  const handleLogout = async () => {
    await logout();
  };

  return (
    isOpen && (
      <>
        <div
          className="cursor-pointer origin-top-right absolute right-16 top-14 w-28 rounded-md shadow-lg bg-gray-200 ring-1 ring-black ring-opacity-5"
          role="menu"
          onClick={handleLogout}
        >
          <div className="flex items-center justify-center">
            <span className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-800 hover:font-semibold">
              Logout
            </span>
          </div>
        </div>
      </>
    )
  );
};

export default Dropdown;
