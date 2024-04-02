import React from "react";
import "./MessageList.css";

function MessageList({ messages }) {
  return (
    <div className="messageList">
      {messages.map((msg, index) => (
        <div key={index} className="messageItem">
          {msg}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
