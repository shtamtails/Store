import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
  },
});
