import React from "react";
import "./ChatListPanel.css";

function ChatListPanel() {
  // Mock chats data
  const chats = ["Chat 1", "Chat 2", "Chat 3"]; // This would be dynamic in a real app

  return (
    <div className="chatListPanel">
      {chats.map((chat, index) => (
        <div key={index} className="chatItem">
          {chat}
        </div>
      ))}
    </div>
  );
}

export default ChatListPanel;
