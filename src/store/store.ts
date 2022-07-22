import { configureStore } from "@reduxjs/toolkit";
import { cart } from "./slices/cart";
import { storeSettings } from "./slices/storeSettings";

export const store = configureStore({
  reducer: {
    storeParams: storeSettings.reducer,
    cart: cart.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
