import React from "react";
import ChatListPanel from "../../components/chat/ChatListPanel";
import ChatWindow from "../../components/chat/ChatWindow";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../state/chat/chatRoomsSlice";

function ChatPage() {
  const dispatch = useDispatch();
  const [selectedRoomId, setSelectedRoomId] = React.useState(null);

  const user = useSelector((state) => state.auth.user);
  const getChatRooms = async () => {
    try {
      await dispatch(getRooms()).unwrap();
    } catch (error) {
      console.error(error);
    }
  };
  //TODO:fix user.user issue
  return (
    <div className="app">
      <ChatListPanel getRooms={getChatRooms} onSelectRoom={setSelectedRoomId} />
      <ChatWindow selectedRoomId={selectedRoomId} user={user.user} />
    </div>
  );
}

export default ChatPage;
