//import data from "../../mock/data.json";
import { useState, useEffect } from "react";

import * as S from "./styles";

export default function ProductCard() {
  interface Product {
    id: Number;
    title: String;
    category: String;
    description: String;
    image?: any;
    price: String;
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

  return (
    <S.ContainerProducts>
      {listProduct.map((item) => (
        <S.CardProduct key={`id${item.id}`}>
          <S.ProductCategory>{item.category}</S.ProductCategory>
          <S.ProductImageSection>
            <S.ProductImage src={item.image} alt="Product Image" />
          </S.ProductImageSection>
          <S.ProductTitle>{item.title}</S.ProductTitle>
          <S.ProductDescriptionSection>
            <S.ProductDescription>{item.description}</S.ProductDescription>
          </S.ProductDescriptionSection>
          <S.ProductPrice>{item.price}</S.ProductPrice>
        </S.CardProduct>
      ))}
    </S.ContainerProducts>
  );
}
