import { useEffect, useState } from "react";
import { handleSignupErrors } from "../utils/handleError";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { userAction } from "../utils/authSlice";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((store) => store.auth.userData);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userData) {
      navigate("/");
      return;
    }
    navigate("/signup");
  }, []);

  const signup = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleSignupErrors({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          password,
          username,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      dispatch(userAction(data));
      navigate("/");
      toast.success(`Welcome ${data.username}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};
