export interface ICartItems {
  orderId: string;
  id: string;
  attributes: object;
  amount: number;
}

export interface ICart {
  cart: ICartItems[];
}
