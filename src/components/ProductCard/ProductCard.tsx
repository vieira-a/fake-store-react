// database
import data from "../../mock/data.json";

// styles
import * as S from "./styles";
import { color } from "../../components/UI/colors";

// react hooks
import { useContext } from "react";

// custom hook
import { useOrderProduct } from "../../hooks/useOrderProduct";

// context
import { CartContext } from "../../context/CartContext";
import { CartContextType } from "../../types/cart";

// components
import AddCart from "../AddCart/AddCart";

export default function ProductCard() {
  const { saveCart } = useContext(CartContext) as CartContextType;
  const { changeOrder } = useOrderProduct(data);

  /* Fetch online endpoint (TO REFACTOR)
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
    <>
      <S.PageUtilSection>
        <S.NavIndicator>Fake Store {">"} Home</S.NavIndicator>
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
            <S.ProductPrice>$ {item.price}</S.ProductPrice>
            <S.ProductCartTotals>
              <AddCart productId={item.id} onClick={() => saveCart(item.id)} />
            </S.ProductCartTotals>
          </S.CardProduct>
        ))}
      </S.ContainerProducts>
    </>
  );
}
