import toast from "react-hot-toast";

export const handleSignupErrors = ({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  // console.log(fullName, userName, password, confirmPassword, gender);
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all required fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Passwords should be at least 6 characters");
    return false;
  }
  return true;
};

export const handleLoginErrors = ({ username, password }) => {
  if (!username || !password) {
    toast.error("Please fill all required fields");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
};

;
