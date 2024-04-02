import React, { useEffect } from "react";
import "./ChatListPanel.css";
import { useSelector } from "react-redux";

function ChatListPanel({ getRooms, onSelectRoom }) {
  // Mock chats data

  const rooms = useSelector((state) => state.chatRooms.rooms);

  useEffect(() => {
    getRooms();
  }, [getRooms]);

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
