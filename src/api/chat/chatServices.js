import axios from "../../shared/axios";

const getChatRooms = async () => {
  try {
    const response = await axios.get("/chat-room/get-rooms");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getRoom = async (roomId) => {
  try {
    const response = await axios.get(`/chat-room/get-room/${roomId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getRoomMessages = async (roomId) => {
  try {
    const response = await axios.get(`/messages/get-room-messages/${roomId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getChatRooms, getRoom, getRoomMessages };
