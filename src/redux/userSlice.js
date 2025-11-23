import { createSlice } from "@reduxjs/toolkit";

const LG_user = localStorage.getItem("LG_userData");

const initialState = {
  value: LG_user ? JSON.parse(LG_user) : null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData: (state, action) => {
      state.value = JSON.parse(action.payload);
      localStorage.setItem("LG_userData", action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { userData } = userSlice.actions;

export default userSlice.reducer;
