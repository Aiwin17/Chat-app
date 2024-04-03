import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import authSlice from "./authSlice";
import selectedUserSlice from "./selectedUserSlice";
import messageSlice from "./messageSlice";

const store = configureStore({
  reducer: {
    app: appslice,
    auth: authSlice,
    selectedUser: selectedUserSlice,
    message: messageSlice,
  },
});

export default store;
