import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:3500/api/users/", {
          withCredentials: true,
        });
        setConversations(res.data.filteredUsers);
        if (res.data.error) {
          throw new Error(res.data.error);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);
  return { loading, conversations };
};

export default useGetConversations;
