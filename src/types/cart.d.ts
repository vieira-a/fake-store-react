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
<<<<<<< HEAD
  amount?: number;
  total?: number;
}

export interface IProductCart {
  item: [];
  amount: number;
  total: () => void;
=======
>>>>>>> 794d1343bf258d3147715db23ad146092167a7a2
}

//cart methods
export type CartContextType = {
  cart: ICart[];
  saveCart: (cart: ICart) => void;
  updateCart: (id: number) => void;
};
