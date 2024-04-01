import React, { useState } from "react";
import "./MessageEntry.css";

function MessageEntry() {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    console.log(message); // Here you would typically send the message to your server
    setMessage(""); // Clear the input after sending
  };

  return (
    <div className="messageEntry">
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default MessageEntry;
