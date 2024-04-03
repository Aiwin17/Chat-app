import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { latestMessage } from "../utils/messageSlice";

const useSendMessage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const userId = useSelector((store) => store.selectedUser.selectedUser._id);

  const send = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/messages/sender/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      dispatch(latestMessage(message));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { send, loading };
};
export default useSendMessage;
