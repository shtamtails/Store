import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IStoreSettingsReducer {
  currency: string;
  contentOverlay: boolean;
}

const initialState = {
  currency: "$",
  contentOverlay: false,
};

export const storeSettings = createSlice({
  name: "storeSettings",
  initialState,
  reducers: {
    setCurrency: (state: IStoreSettingsReducer, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    setOverlay: (state: IStoreSettingsReducer, action: PayloadAction<boolean>) => {
      state.contentOverlay = action.payload;
    },
  },
});

export const { setCurrency, setOverlay } = storeSettings.actions;
