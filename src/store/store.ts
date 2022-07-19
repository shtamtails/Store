import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { storeSettings } from "./reducers/storeSettings";

export const store = configureStore({
  reducer: {
    store: storeSettings.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
