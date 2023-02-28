import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import * as S from "./styles";
import { color } from "../../components/UI/colors";
import BackBuy from "../../components/BackBuy/BackBuy";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContextType } from "../../types/cart";
import { CartContext } from "../../context/CartContext";
import IconButton from "@mui/material/IconButton";

export default function Cart() {
  const { cart, setCart, updateTotalPrice, updateAmount } = useContext(
    CartContext
  ) as CartContextType;

  const incrementAmount = (event: any) => {
    let idBotao = Number(event.target.id);
    cart.map((item: any) => {
      if (item[0].id === idBotao) {
        setCart([...cart], item[0].amount++);
      }
    });
  };

  const decrementAmount = (event: any) => {
    let idBotao = Number(event.target.id);
    cart.map((item: any) => {
      if (item[0].id === idBotao) {
        setCart([...cart], item[0].amount--);
      }
      if (item[0].amount < 1) {
        setCart([...cart], (item[0].amount = 1));
      }
    });
  };

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
        <S.CartMessageSection>
          {cart.length === 0 && (
            <>
              <S.CartMessageText>Your cart is empty!</S.CartMessageText>
              <Link to={"/"}>
                <BackBuy />
              </Link>
            </>
          )}
        </S.CartMessageSection>
        <S.CartProductContainer>
          {cart.map((product: any) => (
            <S.CartProductInfo key={product[0].title}>
              <S.CartProductHeader>
                <S.CartProductImage src={product[0].image} />
                <S.CartProductTitle>{product[0].title}</S.CartProductTitle>
              </S.CartProductHeader>
              <S.CartCalculation>
                <S.CartCalculationAmount>
                  <button id={product[0].id} onClick={decrementAmount}>
                    -
                  </button>
                  <S.CartProductAmount>{product[0].amount}</S.CartProductAmount>
                  <button id={product[0].id} onClick={incrementAmount}>
                    +
                  </button>
                  <button>Remover</button>
                </S.CartCalculationAmount>
                <S.CartProductPrice>
                  $ {updateTotalPrice(product[0].amount, product[0].price)}
                </S.CartProductPrice>
              </S.CartCalculation>

              <S.CartTotalToPay>
                <p>Subtotal</p>
                <p></p>
              </S.CartTotalToPay>
            </S.CartProductInfo>
          ))}
        </S.CartProductContainer>
      </S.CartSection>
    </>
  );
}
