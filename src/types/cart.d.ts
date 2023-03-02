import React, { ReactNode } from "react";
export interface IProductCart {
  item: [];
  amount: number;
  total: () => void;
}

export type CartContextType = {
  cart: any;
  setCart: any;
  newCart: any;
  saveCart: (productId: number) => void;
  updateTotalPrice: (amount: number, price: number) => ReactNode;
  updateAmount: (amount: number) => void;
  totalCartPrice: any;
};
