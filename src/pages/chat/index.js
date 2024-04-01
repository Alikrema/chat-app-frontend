import React from "react";
import ChatListPanel from "../../components/chat/ChatListPanel";
import ChatWindow from "../../components/chat/ChatWindow";

function ChatPage() {
  return (
    <div className="app">
      <ChatListPanel />
      <ChatWindow />
    </div>
  );
}

export default ChatPage;
