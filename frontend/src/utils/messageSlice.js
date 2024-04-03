import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message-slice",
  initialState: {
    message: {},
  },
  reducers: {
    latestMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { latestMessage } = messageSlice.actions;
export default messageSlice.reducer;
