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
  const [totalCartPrice, setTotalCartPrice] = useState<any>();

  const updateTotalPrice = (amount: number, price: number) => {
    return amount * price;
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
    //console.log("*****TOTAL PRICE", totalPrice);
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

  // function dynamicSort(property: any) {
  //   var sortOrder = 1;
  //   if (property[0] === "-") {
  //     sortOrder = -1;
  //     property = property.substr(1);
  //   }
  //   return function (a: any, b: any) {
  //     /* next line works with strings and numbers,
  //      * and you may want to customize it to your needs
  //      */
  //     var result =
  //       a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
  //     return result * sortOrder;
  //   };
  // }
  // console.log(cart.sort(dynamicSort("price")));

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
        totalCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
