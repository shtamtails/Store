import { configureStore } from "@reduxjs/toolkit";
import { cart } from "./slices/cart";
import { settings } from "./slices/settings";

export const store = configureStore({
  reducer: {
    settings: settings.reducer,
    cart: cart.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
