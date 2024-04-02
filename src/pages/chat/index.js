import React from "react";
import ChatListPanel from "../../components/chat/ChatListPanel";
import ChatWindow from "../../components/chat/ChatWindow";
import { useDispatch } from "react-redux";
import { getRooms } from "../../state/chat/chatRoomsSlice";

function ChatPage() {
  const dispatch = useDispatch();
  const [selectedRoomId, setSelectedRoomId] = React.useState(null);

  const getChatRooms = async () => {
    try {
      await dispatch(getRooms()).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <ChatListPanel getRooms={getChatRooms} onSelectRoom={setSelectedRoomId} />
      <ChatWindow selectedRoomId={selectedRoomId} />
    </div>
  );
}

export default ChatPage;
