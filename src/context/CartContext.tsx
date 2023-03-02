// database
import data from "../mock/data.json";

// react hooks
import { useState, createContext, useEffect } from "react";
import { CartContextType } from "../types/cart";

export const CartContext = createContext<CartContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};

const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<any>([]);
  const [newCart, setNewCart] = useState<any>([]);
  const [totalCartPrice, setTotalCartPrice] = useState<any>();

  const updateTotalPrice = (amount: number, price: number) => {
    return (amount * price).toFixed(2);
  };

  const totalProductPrice = () => {
    let individualPrices: any[] = [];
    let totalPrice = 0;
    newCart.map((item: any) => {
      individualPrices.push(Number(item[0].price * item[0].amount));
    });

    totalPrice = individualPrices.reduce(function (acc: number, curr: number) {
      return acc + curr;
    }, 0);

    return totalPrice.toFixed(2);
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

  useEffect(() => {
    setTotalCartPrice(totalProductPrice());
  }, [newCart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        saveCart,
        newCart,
        updateTotalPrice,
        updateAmount,
        totalCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
