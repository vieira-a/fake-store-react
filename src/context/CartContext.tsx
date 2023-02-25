import { useState, createContext } from "react";
import { ICart, CartContextType } from "../types/cart";
import data from "../mock/data.json";

export const CartContext = createContext<CartContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};

const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<Object[]>([]);

  const updateTotalPrice = (amount: number, price: number) => {
    return amount * price;
  };

  const saveCart = (productId: number) => {
    data.map((product) => {
      if (product.id === productId) {
        setCart([
          ...cart,
          [
            {
              item: product,
              amount: 1,
              total: updateTotalPrice(1, product.price),
            },
          ],
        ]);
      }
    });
  };

  console.log(cart);

  /* Old context
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
  }; */

  return (
    <CartContext.Provider value={{ cart, saveCart, updateTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
