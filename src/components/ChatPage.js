import React from "react";
import ChatListPanel from "./ChatListPanel";
import ChatWindow from "./ChatWindow";
import "../App.css";

function ChatPage() {
  return (
    <div className="app">
      <ChatListPanel />
      <ChatWindow />
    </div>
  );
}

export default ChatPage;
