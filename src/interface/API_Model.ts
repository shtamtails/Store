export interface IAttribute {
  displayValue: string;
  value: string;
  id: string;
}

export interface IAttributeSet {
  id: string;
  name: string;
  type: string;
  items: IAttribute[];
}

export interface ICurrency {
  label: string;
  symbol: string;
}

export interface IPrice {
  currency: ICurrency;
  amount: number;
}

export interface IProduct {
  id: string;
  name: string;
  inStock: boolean;
  gallery: string[];
  description: string;
  category: string;
  attributes: IAttributeSet[];
  prices: IPrice[];
  brand: string;
}

export interface ICategory {
  name: string;
  products: IProduct[];
}
