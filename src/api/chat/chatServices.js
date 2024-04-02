import axios from "../../shared/axios";

const getChatRooms = async () => {
  try {
    const response = await axios.get("/chat-room/get-rooms");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getChatRooms };
