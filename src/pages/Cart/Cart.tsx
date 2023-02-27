import IconButton from "@mui/material/IconButton";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import * as S from "./styles";
import { color } from "../../components/UI/colors";
import BackBuy from "../../components/BackBuy/BackBuy";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContextType } from "../../types/cart";
import { CartContext } from "../../context/CartContext";
import { borderRight, margin } from "@mui/system";

export default function Cart() {
  const { cart } = useContext(CartContext) as CartContextType;

  {
    /* <S.CartMessage>Your cart is empty!</S.CartMessage> */
  }
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
        {cart.length === 0 && (
          <>
            <S.CartMessage>Your cart is empty!</S.CartMessage>
            <Link to={"/"}>
              <BackBuy />
            </Link>
          </>
        )}
        <S.CartProductContainer>
          {cart.map((product: any) => (
            <>
              <S.CartProductInfo key={Math.random()}>
                <S.CartProductHeader>
                  <S.CartProductImage src={product[0].image} />
                  <S.CartProductTitle>{product[0].title}</S.CartProductTitle>
                </S.CartProductHeader>
                <S.CartCalculation>
                  <S.CartCalculationAmount>
                    <RemoveIcon
                      sx={{ borderRight: `1px solid ${color.slate["500"]}` }}
                    />
                    <S.CartProductAmount>
                      {product[0].amount}
                    </S.CartProductAmount>

                    <AddIcon
                      sx={{ borderInline: `1px solid ${color.slate["500"]}` }}
                    />
                    <DeleteIcon />
                  </S.CartCalculationAmount>
                  <S.CartProductPrice>$ {product[0].price}</S.CartProductPrice>
                </S.CartCalculation>
              </S.CartProductInfo>
            </>
          ))}
        </S.CartProductContainer>
        <S.CartTotalToPay>Total a pagar</S.CartTotalToPay>
      </S.CartSection>
    </>
  );
}
