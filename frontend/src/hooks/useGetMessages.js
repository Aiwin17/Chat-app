import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const useGetMessages = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const toggle = useSelector((store) => store.app.isClicked);
  const recieverId = useSelector(
    (store) => store.selectedUser.selectedUser?._id
  );
  const message = useSelector((store) => store.message.message);

  useEffect(() => {
    if (recieverId) {
      messages(recieverId);
    }
  }, [toggle, message]);
  const messages = async (id) => {
    setLoading(true);
    try {
      if (id) {
        const res = await fetch(`/api/messages/${id}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setChats(data);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { messages, loading, chats, setChats };
};
export default useGetMessages;
