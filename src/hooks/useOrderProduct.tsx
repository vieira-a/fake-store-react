import { useState, useEffect } from "react";

export const useOrderProduct = (products: Object) => {
  const [orderBy, setOrderBy] = useState<string>("");

  const changeOrder = (newOrder: string) => {
    setOrderBy(newOrder);
  };

  const orderProducts = (products: Object) => {
    if (products instanceof Array && orderBy === "low-to-high") {
      products.sort(
        (a: any, b: any) => parseFloat(a.price) - parseFloat(b.price)
      );
    } else if (products instanceof Array && orderBy === "high-to-low") {
      products.sort(
        (a: any, b: any) => parseFloat(b.price) - parseFloat(a.price)
      );
    }
    setOrderBy("");
  };

  useEffect(() => {
    orderProducts(products);
  }, [orderBy]);

  return { changeOrder };
};
