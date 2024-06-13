import { useAuthContext } from "../../context/authContext.jsx";
import useConversation from "../../zustand/useConversation.jsx";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { IoIosArrowRoundBack } from "react-icons/io";

const MessageContainer = () => {
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  const name = authUser.fullName;

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected name={name} />
      ) : (
        <>
          <div className="flex bg-slate-500 px-4 py-2 mb-2 justify-between items-center">
            <div className=" flex gap-3">
              <span>
                <img
                  src={selectedConversation.profilePic}
                  className="h-6"
                  alt=""
                />
              </span>{" "}
              <span className="text-gray-900 font-bold">
                {selectedConversation.username}
              </span>
            </div>
            <div className="text-white text-2xl border border-black rounded-xl bg-slate-900 hover:bg-white hover:text-black transition duration-300 ease-in-out">
              <IoIosArrowRoundBack onClick={handleClick} />
            </div>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = ({ name }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {name} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
