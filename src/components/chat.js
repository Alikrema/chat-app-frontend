import React, { useState, useEffect } from "react";
import io from "socket.io-client";

// Replace this URL with your server's URL
const SOCKET_IO_URL = "http://localhost:3000";
const socket = io(SOCKET_IO_URL);

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    // Listen for messages from the server
    socket.on("chat message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    // Clean up on component unmount
    return () => {
      socket.off("chat message");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Emit a message to the server
    socket.emit("chat message", inputMessage);
    setInputMessage("");
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
