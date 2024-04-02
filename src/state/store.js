import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import chatRoomsReducer from "./chat/chatRoomsSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chatRooms: chatRoomsReducer,
  },
});
