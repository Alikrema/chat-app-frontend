import React, { useEffect } from "react";
import ChatHeader from "../ChatHeader";
import MessageList from "../MessageList";
import MessageEntry from "../MessageEntry";
import "./ChatWindow.css";
import { useSelector, useDispatch } from "react-redux";
import { getRoomData } from "../../../state/chat/currentRoomSlice";

function ChatWindow({ selectedRoomId }) {
  const dispatch = useDispatch();
  const selectedRoom = useSelector((state) => state.currentRoom.room);
  const roomMessages = useSelector((state) => state.currentRoom.messages);
  const loading = useSelector((state) => state.currentRoom.loading);

  useEffect(() => {
    async function fetchData() {
      try {
        await dispatch(getRoomData(selectedRoomId)).unwrap();
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [dispatch, selectedRoomId]);

  if (!selectedRoomId) {
    return <div className="chatWindow">Select a room</div>;
  }

  if (loading) {
    return <div className="chatWindow">Loading...</div>;
  }

  return (
    <div className="chatWindow">
      <ChatHeader roomInfo={selectedRoom} />
      <MessageList messages={roomMessages} />
      <MessageEntry />
    </div>
  );
}

export default ChatWindow;
