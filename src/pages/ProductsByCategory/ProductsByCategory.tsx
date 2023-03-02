// database
import data from "../../mock/data.json";

// styles
import * as S from "./styles";
import * as ProductCardStyles from "../../components/ProductCard/styles";
import * as FooterStyles from "../../components/Footer/styles";

// react hooks
import { useState, useContext, useEffect } from "react";

// custom hooks
import { useOrderProduct } from "../../hooks/useOrderProduct";

// react libs
import { useParams } from "react-router-dom";

//context
import { CartContext } from "../../context/CartContext";
import { CartContextType } from "../../types/cart";

// components
import AddCart from "../../components/AddCart/AddCart";
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
    <S.Main>
      <ProductCardStyles.PageUtilSection>
        <ProductCardStyles.NavIndicator>
          Fake Store {">"} Category: {category}
        </ProductCardStyles.NavIndicator>
        <ProductCardStyles.OrderByFilter>
          <form>
            <select onChange={(event) => changeOrder(event.target.value)}>
              <option value="">Order by price</option>
              <option value="low-to-high">Low to high</option>
              <option value="high-to-low">Hight to low</option>
            </select>
          </form>
        </ProductCardStyles.OrderByFilter>
      </ProductCardStyles.PageUtilSection>
      <ProductCardStyles.ContainerProducts>
        {productsByCategory.map((item: any) => (
          <ProductCardStyles.CardProduct key={`id${item.id}`} id={`${item.id}`}>
            <ProductCardStyles.ProductCategory>
              {item.category}
            </ProductCardStyles.ProductCategory>
            <ProductCardStyles.ProductImageSection>
              <ProductCardStyles.ProductImage
                src={item.image}
                alt="Product Image"
              />
            </ProductCardStyles.ProductImageSection>
            <ProductCardStyles.ProductTitle>
              {item.title}
            </ProductCardStyles.ProductTitle>
            <ProductCardStyles.ProductDescriptionSection>
              <ProductCardStyles.ProductDescription>
                {item.description}
              </ProductCardStyles.ProductDescription>
            </ProductCardStyles.ProductDescriptionSection>
            <ProductCardStyles.ProductPrice>
              {item.price}
            </ProductCardStyles.ProductPrice>
            <ProductCardStyles.ProductCartTotals>
              <AddCart productId={item.id} onClick={() => saveCart(item.id)} />
            </ProductCardStyles.ProductCartTotals>
          </ProductCardStyles.CardProduct>
        ))}
      </ProductCardStyles.ContainerProducts>
      <FooterStyles.FooterMenu>
        <MenuCategories />
      </FooterStyles.FooterMenu>
    </S.Main>
  );
}
