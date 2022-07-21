import { configureStore } from "@reduxjs/toolkit";
import { storeSettings } from "./slices/storeSettings";

export const store = configureStore({
  reducer: {
    storeParams: storeSettings.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
