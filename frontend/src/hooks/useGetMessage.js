import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";

const useGetMessage = () => {
  const { selectedConversation, messages, setMessages } = useConversation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:3500/api/messages/${selectedConversation._id}`,
          { withCredentials: true }
        );
        if (res.data.error) throw new Error(data.error);
        setMessages(res.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);
  return { loading, messages };
};

export default useGetMessage;
