import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/redux/apiSlice";

import sessionSlice from "@/redux/features/session-slice";
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    session: sessionSlice.reducer,
  },
  middleware: (getDefualtMiddleware) =>
    getDefualtMiddleware().concat(apiSlice.middleware),
});



export type RootState = ReturnType<typeof store.getState>


// inititalize the store
const initializeStore = async () => {
  // load the user
  await store.dispatch(authSlice.endpoints.loadUser.initiate(undefined, {track: false}))
}

initializeStore();