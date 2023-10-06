import { useContext, useState } from "react";
import { MessageProvider } from "./context/MessageProvider";
import { MessageContext } from "./context/MesssageContext";

const Message = () => {
  return (
    <MessageProvider>
      <SetMessage />
    </MessageProvider>
  );
};

export default Message;

const SetMessage = () => {
  const { message, setMessage } = useContext(MessageContext);
  return (
    <div>
          {message} <br />
          {message ? "You are my best friend" :"I will never let you go."} <br />
      <button
        onClick={() => {
          setMessage("Hii somnath");
        }}
      >
        See magic
      </button>
    </div>
  );
};
