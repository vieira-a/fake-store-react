import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import React from "react";
import * as S from "./styles";
import { color } from "../../components/UI/colors";
import BackBuy from "../../components/BackBuy/BackBuy";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContextType } from "../../types/cart";
import { CartContext } from "../../context/CartContext";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Cart() {
  const {
    cart,
    setCart,
    newCart,
    updateTotalPrice,
    updateAmount,
    totalCartPrice,
  } = useContext(CartContext) as CartContextType;

  const incrementAmount = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    let buttonId = Number(event.currentTarget.id);
    newCart.map((item: any) => {
      if (item[0].id === buttonId) {
        setCart([...newCart], item[0].amount++);
      }
    });
  };

  const decrementAmount = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const buttonId = Number(event.currentTarget.id);
    newCart.map((item: any) => {
      if (item[0].id === buttonId) {
        setCart([...newCart], item[0].amount--);
      }
      if (item[0].amount < 1) {
        setCart([...newCart], (item[0].amount = 1));
      }
    });
  };

  const removeProductFromCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const buttonId = Number(event.currentTarget.id);
    newCart.map((item: any) => {
      if (item[0].id === buttonId) {
        setCart(newCart.filter((item: any) => item[0].id != buttonId));
      }
    });
  };

  const calculateTotalCart = (arr: any, price: number) => {
    let finalPrice = 0;
    arr.map((item: any) => {
      finalPrice = +item[0].price;
    });
    return finalPrice;
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
          {newCart.length === 0 && (
            <>
              <S.CartMessageText>Your cart is empty!</S.CartMessageText>
              <Link to={"/"}>
                <BackBuy />
              </Link>
            </>
          )}
        </S.CartMessageSection>
        <S.CartProductContainer>
          {newCart.map((product: any) => (
            <S.CartProductInfo key={product[0].title}>
              <S.CartProductHeader>
                <S.CartProductImage src={product[0].image} />
                <S.CartProductTitle>{product[0].title}</S.CartProductTitle>
              </S.CartProductHeader>
              <S.CartCalculation>
                <S.CartCalculationAmount>
                  <S.UpdateAmountSection>
                    <S.ButtonRemoveAmount
                      id={product[0].id}
                      onClick={decrementAmount}
                    >
                      <RemoveIcon />
                    </S.ButtonRemoveAmount>
                    <S.CartProductAmount>
                      {product[0].amount}
                    </S.CartProductAmount>
                    <S.ButtonAddAmount
                      id={product[0].id}
                      onClick={incrementAmount}
                    >
                      <AddIcon />
                    </S.ButtonAddAmount>
                  </S.UpdateAmountSection>
                  <S.ButtonRemoveProduct
                    id={product[0].id}
                    onClick={removeProductFromCart}
                  >
                    <DeleteIcon />
                  </S.ButtonRemoveProduct>
                </S.CartCalculationAmount>
                <S.CartProductPrice>
                  $ {updateTotalPrice(product[0].amount, product[0].price)}
                </S.CartProductPrice>
              </S.CartCalculation>

              <S.CartTotalToPay>
                <S.CartSubtotal>
                  <p>Subtotal</p>
                  <S.CartValue>$ {totalCartPrice}</S.CartValue>
                </S.CartSubtotal>
              </S.CartTotalToPay>
            </S.CartProductInfo>
          ))}
        </S.CartProductContainer>
      </S.CartSection>
    </>
  );
}
