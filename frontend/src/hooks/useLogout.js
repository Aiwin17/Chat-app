import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogoutAction } from "../utils/authSlice";
import { selectedUser } from "../utils/selectedUserSlice";
import { latestMessage } from "../utils/messageSlice";
// import { clearMessages } from "../utils/messageSlice";

const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      dispatch(userLogoutAction());
      dispatch(selectedUser({}));
      dispatch(latestMessage({}));
      navigate("/login");
      toast.success("Logout Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return { logout };
};

export default useLogout;
