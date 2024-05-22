import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext.jsx";
import axios from "axios";
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const success = handleInputErrors(username, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3500/api/auth/login",
        {
          username: username,
          password: password,
        },
        { withCredentials: true }
      );

      if (res.data.error) {
        throw new Error(res.data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(res.data));
      setAuthUser(res.data);
      if (res) {
        toast.success("Successfully logged in");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};
export default useLogin;

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
