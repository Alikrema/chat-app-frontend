import React, { useState } from "react";
import "./MessageEntry.css";

function MessageEntry({ onSend }) {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="messageEntry">
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type a message..."
      />
      <button onClick={() => onSend(message)}>Send</button>
    </div>
  );
}

export default MessageEntry;
