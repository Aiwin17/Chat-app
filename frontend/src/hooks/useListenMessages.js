import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContex";
import useGetMessages from "./useGetMessages";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { chats, setChats } = useGetMessages();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setChats([...chats, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, chats, setChats]);
};
export default useListenMessages;
