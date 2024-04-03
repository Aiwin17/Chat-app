import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user-data",
  initialState: {
    userData: JSON.parse(localStorage.getItem("chat-user")) || "",
  },
  reducers: {
    userAction: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("chat-user", JSON.stringify(state.userData));
    },
    userLogoutAction: (state, action) => {
      state.userData = "";
      localStorage.removeItem("chat-user");
    },
  },
});

export const { userAction, userLogoutAction } = authSlice.actions;
export default authSlice.reducer;
