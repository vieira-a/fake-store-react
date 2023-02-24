import * as S from "./styles";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function AddCart() {
  return (
    <S.ButtonAddToCart>
      <ShoppingBagIcon />
      Add to Cart
    </S.ButtonAddToCart>
  );
}
