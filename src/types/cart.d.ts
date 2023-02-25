// cart type
export interface ICart {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  amount?: number;
  total?: number;
}

export interface IProductCart {
  item: [];
  amount: number;
  total: () => void;
}

//cart methods
export type CartContextType = {
  cart: ICart[];
  saveCart: (cart: ICart) => void;
  updateCart: (id: number) => void;
};
