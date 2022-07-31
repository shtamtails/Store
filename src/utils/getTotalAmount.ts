import { ICartProduct } from "interface/ICart";

export const getTotalAmount = (products: ICartProduct[]) => {
  return products ? products.reduce((a, b) => a + b.amount, 0) : 0;
};
