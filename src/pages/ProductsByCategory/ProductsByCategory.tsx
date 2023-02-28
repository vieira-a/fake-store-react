import { useParams } from "react-router-dom";
import data from "../../mock/data.json";
import * as S from "../../components/ProductCard/styles";
import * as FooterStyles from "../../components/Footer/styles";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartContextType } from "../../types/cart";
import AddCart from "../../components/AddCart/AddCart";

import MenuCategories from "../../components/MenuCategories/MenuCategories";

export default function ProductsByCategory() {
  const { saveCart } = useContext(CartContext) as CartContextType;
  const { category } = useParams();

  return (
    <>
      <S.ContainerProducts>
        {data.map(
          (item) =>
            item.category === category && (
              <S.CardProduct key={`id${item.id}`} id={`${item.id}`}>
                <S.ProductCategory>{item.category}</S.ProductCategory>
                <S.ProductImageSection>
                  <S.ProductImage src={item.image} alt="Product Image" />
                </S.ProductImageSection>
                <S.ProductTitle>{item.title}</S.ProductTitle>
                <S.ProductDescriptionSection>
                  <S.ProductDescription>
                    {item.description}
                  </S.ProductDescription>
                </S.ProductDescriptionSection>
                <S.ProductPrice>{item.price}</S.ProductPrice>
                <AddCart
                  productId={item.id}
                  onClick={() => saveCart(item.id)}
                />
              </S.CardProduct>
            )
        )}
      </S.ContainerProducts>
      <FooterStyles.FooterMenu>
        <MenuCategories />
      </FooterStyles.FooterMenu>
    </>
  );
}
