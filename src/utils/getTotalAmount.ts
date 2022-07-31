import { ICartItem } from "interface/ICart";

export const getTotalAmount = (products: ICartItem[]) => {
  return products ? products.reduce((a, b) => a + b.amount, 0) : 0;
};
