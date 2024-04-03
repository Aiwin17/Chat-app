import React from "react";
import Chatlist from "./Chatlist";
import useAllUsers from "../hooks/useAllUsers";


const Chats = () => {
  const { users, loading } = useAllUsers(); 

  return (
    <div className="h-full mt-4 overflow-y-scroll p-2 scrollable-hide">
      {users.map((user, index) => (
        <React.Fragment key={index}>
          <Chatlist data={user} loader={loading} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Chats;
