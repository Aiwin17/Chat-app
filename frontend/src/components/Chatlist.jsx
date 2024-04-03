import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../utils/appslice";
import { selectedUser } from "../utils/selectedUserSlice";
import { useSocketContext } from "../context/SocketContex";

const Chatlist = ({ data, loader }) => {
  let clicked = useSelector((store) => store.app.isClicked);
  const user = useSelector((store) => store.selectedUser.selectedUser);
  clicked = data._id === user._id;

  const dispatch = useDispatch();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(data._id);

  const onToggleHandler = () => {
    dispatch(toggle());
    dispatch(selectedUser(data));
  };

  return (
    <div
      onClick={onToggleHandler}
      className={`flex hover:bg-purple-700 p-2 items-center space-x-2 text-white bg-gray-600 rounded-lg mt-4 cursor-pointer ${
        clicked ? "bg-purple-700" : ""
      }`}
    >
      <span
        className={`${isOnline ? "bg-green-200" : ""} rounded-full w-2 h-2`}
      ></span>
      <img className="w-8" src={data?.profilePic} alt="profile" />
      <span className="text-sm">{data?.username}</span>
    </div>
  );
};

export default Chatlist;
