import IconButton from "@mui/material/IconButton";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import * as S from "./styles";
import { color } from "../../components/UI/colors";
import BackBuy from "../../components/BackBuy/BackBuy";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContextType } from "../../types/cart";
import { CartContext } from "../../context/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext) as CartContextType;

  return (
    <>
      <S.CartHeader>
        <S.CartLogo>Fake Store</S.CartLogo>
        <S.CartNav>
          <IconButton aria-label="Close Cart">
            <ShoppingBagIcon sx={{ color: color.slate["50"] }} />
          </IconButton>
          <Link to={"/cart"}>Cart</Link>
        </S.CartNav>
      </S.CartHeader>
      <S.CartSection>
        <S.CartTitle>Shopping cart</S.CartTitle>
        {/* <S.CartMessage>Your cart is empty!</S.CartMessage> */}
        <S.CartProductContainer>
        {cart.map((product: any)=>(

          <S.CartProductInfo key={Math.random()}>
            <S.CartProductTitle>{product[0].title}</S.CartProductTitle>
          </S.CartProductInfo>
          
        ))}
        </S.CartProductContainer>
        <Link to={"/"}>
          <BackBuy />
        </Link>
      </S.CartSection>
    </>
  );
}
