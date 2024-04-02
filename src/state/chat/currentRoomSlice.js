import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRoom, getRoomMessages } from "../../api/chat/chatServices";

export const getRoomData = createAsyncThunk(
  "chat/getRoomData",
  async (roomId, thunkAPI) => {
    try {
      const room = await getRoom(roomId);
      const messages = await getRoomMessages(roomId);
      return { room, messages };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const currentRoomSlice = createSlice({
  name: "currentRoom",
  initialState: {
    room: {},
    messages: [],
    status: "idle",
    error: null,
    loading: true,
  },
  reducers: {
    setRoom: (state, action) => {
      state.room = action.payload;
      state.loading = false;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
      state.loading = false;
    },
    clearRoom: (state) => {
      state.room = {};
      state.messages = [];
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoomData.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.loading = true;
      })
      .addCase(getRoomData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.room = action.payload.room;
        state.messages = action.payload.messages;
        state.error = null;
        state.loading = false;
      })
      .addCase(getRoomData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { setRoom, setMessages, clearRoom, setLoading } =
  currentRoomSlice.actions;
export default currentRoomSlice.reducer;
