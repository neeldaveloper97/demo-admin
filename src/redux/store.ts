import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";

// Configure Store Here
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
