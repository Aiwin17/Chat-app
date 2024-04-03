import { createSlice } from "@reduxjs/toolkit";

const selectedUserSlice = createSlice({
  name: "selectedUser",
  initialState: {
    selectedUser: {},
  },
  reducers: {
    selectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { selectedUser } = selectedUserSlice.actions;
export default selectedUserSlice.reducer;
