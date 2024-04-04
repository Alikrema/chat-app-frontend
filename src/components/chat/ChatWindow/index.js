import React, { useEffect } from "react";
import ChatHeader from "../ChatHeader";
import MessageList from "../MessageList";
import MessageEntry from "../MessageEntry";
import "./ChatWindow.css";
import { useSelector, useDispatch } from "react-redux";
import { getRoomData, setMessages } from "../../../state/chat/currentRoomSlice";
import socket from "../../../socket";
import EVENTS from "../../../shared/constants/eventNames";
import LoadingSpinner from "../../../shared/loading-spinner";

function ChatWindow({ selectedRoomId, user }) {
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
    if (selectedRoomId) {
      fetchData();
    }
  }, [dispatch, selectedRoomId]);
  useEffect(() => {
    if (selectedRoomId && user) {
      socket.emit(EVENTS.USER_JOINED, {
        username: user.username,
        timestamp: new Date(),
        chatRoomId: selectedRoomId,
      });
    }

    return () => {
      if (selectedRoomId && user) {
        socket.emit(EVENTS.USER_LEFT, {
          username: user.username,
          timestamp: new Date(),
          chatRoomId: selectedRoomId,
        });
      }
    };
  }, [selectedRoomId, user]);

  const sendMessage = (message) => {
    if (selectedRoomId && user) {
      socket.emit(EVENTS.CHAT_MESSAGE, {
        username: user.username,
        message,
        timestamp: new Date(),
        chatRoomId: selectedRoomId,
      });
    }
  };

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      dispatch(setMessages([...roomMessages, newMessage]));
    };
    socket.on(EVENTS.NEW_MESSAGE_SAVED, handleNewMessage);
    return () => {
      socket.off(EVENTS.NEW_MESSAGE_SAVED, handleNewMessage);
    };
  }, [roomMessages, dispatch]);

  if (!selectedRoomId) {
    return <div className="noRoomContainer">Select a room</div>;
  }

  if (loading) {
    return (
      <div className="loadingContainer">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="chatWindow">
      <ChatHeader roomInfo={selectedRoom} />
      <MessageList messages={roomMessages} />
      <MessageEntry onSend={sendMessage} />
    </div>
  );
}

export default ChatWindow;
