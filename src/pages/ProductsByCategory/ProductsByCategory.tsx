import { useParams } from "react-router-dom";
import data from "../../mock/data.json";
import * as S from "../../components/ProductCard/styles";
import * as FooterStyles from "../../components/Footer/styles";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { CartContextType } from "../../types/cart";
import AddCart from "../../components/AddCart/AddCart";
import { useOrderProduct } from "../../hooks/useOrderProduct";

import MenuCategories from "../../components/MenuCategories/MenuCategories";

export default function ProductsByCategory() {
  const { saveCart } = useContext(CartContext) as CartContextType;
  const { category } = useParams();
  const [productsByCategory, setProductsByCategory] = useState<any>([]);

  const { changeOrder } = useOrderProduct(productsByCategory);

  function getProductByCategory() {
    setProductsByCategory(data.filter((item) => item.category === category));
  }

  useEffect(() => {
    getProductByCategory();
  }, [category]);

  return (
    <>
    <S.PageUtilSection>
      <S.NavIndicator>Fake Store {'>'} Category: {category}</S.NavIndicator>
      <S.OrderByFilter>
        <form>
          <select onChange={(event) => changeOrder(event.target.value)}>
            <option value="">Order by price</option>
            <option value="low-to-high">Low to high</option>
            <option value="high-to-low">Hight to low</option>
          </select>
        </form>
      </S.OrderByFilter>
    </S.PageUtilSection>
      <S.ContainerProducts>
        {productsByCategory.map((item: any) => (
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
            <AddCart productId={item.id} onClick={() => saveCart(item.id)} />
          </S.CardProduct>
        ))}
      </S.ContainerProducts>
      <FooterStyles.FooterMenu>
        <MenuCategories />
      </FooterStyles.FooterMenu>
    </>
  );
}
