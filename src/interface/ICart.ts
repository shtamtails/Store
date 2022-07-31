import { IAttributeSet, IPrice, IProduct } from "./IStore";

export interface ICartItem {
  orderId: string;
  id: string;
  selectedAttributes: object;
  amount: number;
  name: string;
  inStock: boolean;
  gallery: string[];
  description: string;
  category: string;
  attributes: IAttributeSet[];
  prices: IPrice[];
  brand: string;
}

export interface IMiniCartProduct {
  id: string;
  selectedAttributes: any;
  amount: number;
  name: string;
  gallery: string[];
  attributes: IAttributeSet[];
  brand: string;
}

export interface ICart {
  cart: ICartItem[];
  total: number;
}
