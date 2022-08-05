import { IAttributeSet, IPrice } from "./API_Model";

export interface ICartProduct {
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
  price?: number;
  brand: string;
}

export interface IProductCard {
  id: string;
  selectedAttributes: any;
  amount: number;
  name: string;
  gallery: string[];
  attributes: IAttributeSet[];
  brand: string;
}

export interface ICart {
  cart: ICartProduct[];
  total: number;
}
