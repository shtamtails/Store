import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartProduct } from "interface/ICart";
import { writeToLocalStorage } from "utils/localStorage";

const initialState: ICart = {
  cart: [],
  total: 0,
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state: ICart, action: PayloadAction<ICartProduct>) => {
      state.cart.push(action.payload);
    },
    removeProductFromCart: (state: ICart, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.orderId !== action.payload);
      if (state.cart.length === 0) {
        writeToLocalStorage("cart", []);
        writeToLocalStorage("total", []);
      }
    },
    increaseAmount: (state: ICart, action: PayloadAction<string>) => {
      state.cart.map((item) => item.orderId === action.payload && (item.amount = item.amount + 1));
    },
    decreaseAmount: (state: ICart, action: PayloadAction<string>) => {
      state.cart.map(
        (item) =>
          item.orderId === action.payload &&
          (item.amount > 1 ? (item.amount = item.amount - 1) : removeProductFromCart(item.orderId))
      );
    },
    addTotal: (state: ICart, action: PayloadAction<number>) => {
      state.total += action.payload;
    },
    resetTotal: (state: ICart) => {
      state.total = 0;
    },
    setCart: (state: ICart, action: PayloadAction<ICart>) => {
      state.cart = action.payload.cart;
      state.total = action.payload.total;
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  increaseAmount,
  decreaseAmount,
  addTotal,
  resetTotal,
  setCart,
} = cart.actions;
