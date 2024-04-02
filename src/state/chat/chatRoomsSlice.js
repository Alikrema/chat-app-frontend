import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getChatRooms } from "../../api/chat/chatServices";

export const getRooms = createAsyncThunk("chat/getRooms", async (thunkAPI) => {
  try {
    const rooms = await getChatRooms();
    return rooms;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const chatRoomsSlice = createSlice({
  name: "chat",
  initialState: {
    rooms: [],
    status: "idle",
    error: null,
    loading: true,
  },
  reducers: {
    setRooms: (state, action) => {
      state.rooms = action.payload;
      state.loading = false;
    },
    clearRooms: (state) => {
      state.rooms = [];
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRooms.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getRooms.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rooms = action.payload;
        state.error = null;
      })
      .addCase(getRooms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setRooms, clearRooms, setLoading } = chatRoomsSlice.actions;
export default chatRoomsSlice.reducer;
