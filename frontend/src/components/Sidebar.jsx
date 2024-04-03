import React from "react";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="flex flex-col border border-gray-700 w-[450px] rounded-lg">
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
