import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("LG_AccessToken") || null,
};

export const userTokenSlice = createSlice({
  name: "userToken",
  initialState,
  reducers: {
    userToken: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("LG_AccessToken", action.payload);
    },
  },
});

export const { userToken } = userTokenSlice.actions;

export default userTokenSlice.reducer;