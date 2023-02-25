import * as React from "react";
import { ICart, CartContextType } from "../types/cart";

export const CartContext = React.createContext<CartContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};
const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = React.useState<ICart[]>([]);

  const saveCart = (cart: ICart) => {
    const newCart: ICart = {
      id: cart.id,
      title: cart.title,
      category: cart.category,
      description: cart.description,
      image: cart.image,
      price: cart.price,
      amount: cart.amount,
      status: false,
    };
    setCart([...[cart], newCart]);
  };
  const updateCart = (id: number) => {
    cart.filter((item: ICart) => {
      if (item.id === id) {
        item.status = true;
        setCart([...cart]);
      }
    });
  };
  return (
    <CartContext.Provider value={{ cart, saveCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
