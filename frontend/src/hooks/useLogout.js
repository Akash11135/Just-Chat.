import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";
const useLogout = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:3500/api/auth/logout",
        {
          withCredentials: true,
        }
      );

      if (response.data.error) {
        throw new Error();
      }

      localStorage.removeItem("chat-user");
      setAuthUser(null);

      toast.success("Successfully logged out");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  return { loading, logout };
};

export default useLogout;
