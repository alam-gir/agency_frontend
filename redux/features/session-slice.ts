import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const initialState = {
  status: "loggedOut", // "loggedOut" | "loggingIn" | "error
  user: {
    _id: "",
    name: "",
    email: "",
    role: "",
    avatar: "",
    emailVarified: "",
  },
};
const sessionSlice = createSlice({
  name: "session",
  // when login, make sure that the access_token and refresh_token are set in initial state
  initialState,
  reducers: {
    setSession(state, action) {
      state.user = action.payload.user;
      if(action.payload.user._id){
        state.status = "loggedIn";
      }
    },
    resetSession(state) {
      state.user = initialState.user;
      state.status = "loggedOut";
    },
  },
});

export const { setSession, resetSession } = sessionSlice.actions;

export default sessionSlice;

export const selectSession = (state: RootState) => state.session;
