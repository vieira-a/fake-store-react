import data from "../../mock/data.json";

import { useState } from "react";
import AddCart from "../AddCart/AddCart";

import * as S from "./styles";

export default function ProductCard() {
  const [cart, setCart] = useState<Object[]>([]);

  const updateTotalPrice = (amount: number, price: number) => {
    return amount * price;
  };

  const handleCart = (productId: number) => {
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
  /* Fetch online endpoint
  interface Product {
    id: number;
    title: string;
    category: string;
    description: string;
    images: any;
    price: string;
  }

  const [listProduct, setListProduct] = useState<Product[]>([]);
    async function fetchProduct() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setListProduct(data);
  }

  useEffect(() => {
    fetchProduct();
  }, []); 
  */

  return (
    <S.ContainerProducts>
      {data.map((item) => (
        <S.CardProduct key={`id${item.id}`} id={`${item.id}`}>
          <S.ProductCategory>{item.category}</S.ProductCategory>
          <S.ProductImageSection>
            <S.ProductImage src={item.image} alt="Product Image" />
          </S.ProductImageSection>
          <S.ProductTitle>{item.title}</S.ProductTitle>
          <S.ProductDescriptionSection>
            <S.ProductDescription>{item.description}</S.ProductDescription>
          </S.ProductDescriptionSection>
          <S.ProductPrice>{item.price}</S.ProductPrice>
          <AddCart productId={item.id} onClick={() => handleCart(item.id)} />
        </S.CardProduct>
      ))}
    </S.ContainerProducts>
  );
}
