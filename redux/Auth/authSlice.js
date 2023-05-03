import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
  },
  reducers: {
    signIn(state, action) {
      state.isAuth = true;
      console.log(state);
    },
    // signOut: () => ({
    //   isAuth: false,
    // }),
  },
});
export const { signIn } = authSlice.actions;
export const authReducer = authSlice.reducer;
