import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext.jsx";

function useSignup() {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();
  const signUp = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
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
      const res = await axios.post(
        "http://localhost:3500/api/auth/signup",
        {
          fullName: fullName,
          username: username,
          password: password,
          confirmPassword: confirmPassword,
          gender: gender,
        },
        { withCredentials: true }
      );

      if (res.status === 201 && res.data.error) {
        toast.error(res.data.error);
      }

      if (res.status === 201 && !res.data.error) {
        toast.success(`Signup successfull, username : ${res.data.username}`);
      }

      localStorage.setItem("chat-user", JSON.stringify(res));
      setAuthUser(res);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signUp };
}

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
