import React, { useEffect } from "react";
import "./ChatListPanel.css";
import { useSelector } from "react-redux";

function ChatListPanel({ getRooms, onSelectRoom }) {
  // Mock chats data

  const rooms = useSelector((state) => state.chatRooms.rooms);
  const loading = useSelector((state) => state.chatRooms.loading);

  useEffect(() => {
    getRooms();
  }, [getRooms]);

  if (loading) {
    return <div className="chatListPanel">Loading...</div>;
  }
  return (
    <div className="chatListPanel">
      {rooms.map((chat, index) => (
        <div
          key={index}
          className="chatItem"
          onClick={() => onSelectRoom(chat.id)}
        >
          {chat.name}
        </div>
      ))}
    </div>
  );
}

export default ChatListPanel;
