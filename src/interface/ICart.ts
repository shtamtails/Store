import { IPrice } from "./IStore";

export interface ICartItems {
  orderId: string;
  id: string;
  attributes: object;
  amount: number;
  price: IPrice[];
}

export interface ICart {
  cart: ICartItems[];
  total: number;
}
