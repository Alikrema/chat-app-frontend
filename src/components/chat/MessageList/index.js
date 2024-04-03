import React, { useEffect } from "react";
import "./MessageList.css";
import { useSelector } from "react-redux";

function MessageList({ messages }) {
  const user = useSelector((state) => state.auth.user);
  const userId = user ? user.user.id : null;
  return (
    <div className="messageList">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={
            userId === msg.User.id ? "messageEntrySelf" : "messageEntryOther"
          }
        >
          {msg.message}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
