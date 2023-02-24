import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import * as S from "./styles";
import { color } from "../../components/UI/colors";

export default function Cart() {
  return (
    <>
      <S.CartHeader>
        <S.CartLogo>Fake Store</S.CartLogo>
        <IconButton aria-label="Close Cart">
          <CloseIcon sx={{ color: color.slate["50"] }} />
        </IconButton>
      </S.CartHeader>
      <S.CartSection>
        <S.CartTitle>Cart</S.CartTitle>
      </S.CartSection>
    </>
  );
}
