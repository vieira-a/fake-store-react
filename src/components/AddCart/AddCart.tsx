import * as S from "./styles";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

interface AddCartProps {
  productId: number;
  onClick: () => void;
}

export default function AddCart({ productId, onClick }: AddCartProps) {
  return (
    <S.ButtonAddToCart onClick={onClick}>
      <ShoppingBagIcon />
      Add to Cart
    </S.ButtonAddToCart>
  );
}
