import * as S from "./styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function AddCart() {
  return (
    <S.ButtonAddToCart>
      <AddShoppingCartIcon />
      Add to Cart
    </S.ButtonAddToCart>
  );
}
