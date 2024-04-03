import { useEffect, useState } from "react";
import { handleLoginErrors } from "../utils/handleError";
import { userAction } from "../utils/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const userData = useSelector((store) => store.auth.userData);

  useEffect(() => {
    if (userData) {
      navigate("/");
      return;
    }
    navigate("/login");
  }, []);

  const login = async ({ username, password }) => {
    const success = handleLoginErrors({ username, password });
    if (!success) {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      dispatch(userAction(data));
      navigate("/");
      toast.success("Successfully LoggedIn");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { login, loading };
};

export default useLogin;
