import { ICartItems } from "interface/ICart";

export const getTotalAmount = (products: ICartItems[]) => {
  return products.reduce((a, b) => a + b.amount, 0);
};
