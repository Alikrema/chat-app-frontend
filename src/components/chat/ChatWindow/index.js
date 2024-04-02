import React from "react";
import ChatHeader from "../ChatHeader";
import MessageList from "../MessageList";
import MessageEntry from "../MessageEntry";
import "./ChatWindow.css";

function ChatWindow({ selectedRoomId }) {
  return (
    <div className="chatWindow">
      <ChatHeader />
      <MessageList />
      <MessageEntry />
    </div>
  );
}

export default ChatWindow;
