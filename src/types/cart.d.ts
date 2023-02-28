// cart type
// export interface ICart {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };

import React, { ReactNode } from "react";

//   amount?: number;
//   total?: number;
// }

export interface IProductCart {
  item: [];
  amount: number;
  total: () => void;
}

//cart methods
export type CartContextType = {
  cart: any;
  setCart: any;
  newCart: any;
  saveCart: (productId: number) => void;
  updateTotalPrice: (amount: number, price: number) => ReactNode;
  updateAmount: (amount: number) => void;
  totalCartPrice: any;
  //  updateCart: (id: number) => void;
};
