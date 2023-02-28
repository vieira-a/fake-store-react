import { useState, createContext, useEffect } from "react";
import { CartContextType } from "../types/cart";
import data from "../mock/data.json";

export const CartContext = createContext<CartContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};

const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<any>([]);
  const [newCart, setNewCart] = useState<any>([]);

  const updateTotalPrice = (amount: number, price: number) => {
    return amount * price;
  };

  const updateAmount = (amount: number) => {
    return amount++;
  };

  const saveCart = (productId: number) => {
    data.map((product) => {
      if (product.id === productId) {
        setCart([
          ...cart,
          [
            {
              id: product.id,
              title: product.title,
              image: product.image,
              amount: 1,
              price: product.price,
            },
          ],
        ]);
      }
    });
  };

  useEffect(() => {
    setNewCart(
      Array.from(new Set(cart.map((a: any) => a[0].id))).map((id) => {
        return cart.find((a: any) => a[0].id === id);
      })
    );
  }, [cart]);

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
    <CartContext.Provider
      value={{
        cart,
        setCart,
        saveCart,
        newCart,
        updateTotalPrice,
        updateAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
