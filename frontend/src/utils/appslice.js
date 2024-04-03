import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isClicked: false,
  },
  reducers: {
    toggle: (state) => {
      state.isClicked = !state.isClicked;
    },
  },
});
export const { toggle } = appSlice.actions;
export default appSlice.reducer;
