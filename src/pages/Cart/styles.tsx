import styled from "styled-components";
import { color } from "../../components/UI/colors";

export const CartHeader = styled("header")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${color.purple["800"]};
  color: ${color.slate["50"]};
  box-shadow: 0 10px 30px -10px ${color.purple["6001"]};
`;

export const CartNav = styled("div")`
  display: flex;
  align-items: center;
`;

export const CartLogo = styled("a")`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const CartSection = styled("section")`
  padding-block: 1rem;
`;

export const CartTitle = styled("h4")`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${color.purple["800"]};
  margin-left: 2rem;
`;

export const CartMessageSection = styled("div")`
  display: flex;
  position: absolute;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding-block: 3rem;
`;

export const CartMessageText = styled("p")`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${color.purple["600"]};
  text-align: center;
  margin-block: 1rem;
`;

export const CartProductContainer = styled("section")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 10rem;
`;

export const CartProductInfo = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 4px solid ${color.slate["300"]};
  padding: 2rem;
`;

export const CartProductHeader = styled("div")`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding-block: 1rem;
`;

export const CartProductImage = styled("img")`
  width: 15%;
`;

export const CartProductTitle = styled("p")`
  color: ${color.slate["800"]};
`;

export const CartCalculation = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CartCalculationAmount = styled("div")`
  display: flex;
  align-items: center;
  border: 1px solid ${color.slate["500"]};
  border-radius: 4px;
`;

export const UpdateAmountSection = styled("div")`
  display: flex;
  align-items: center;
`;

export const ButtonUpdateAmount = styled("button")`
  display: flex;
  padding-inline: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
`;

export const ButtonRemoveAmount = styled(ButtonUpdateAmount)`
  display: inline;
  border-right: 1px solid ${color.slate["500"]};
`;

export const ButtonAddAmount = styled(ButtonUpdateAmount)`
  display: inline;
  border-left: 1px solid ${color.slate["500"]};
`;

export const ButtonRemoveProduct = styled(ButtonUpdateAmount)`
  display: inline;
  background-color: ${color.purple["800"]};
  color: ${color.slate["50"]};
`;

export const CartProductAmount = styled("p")`
  padding-inline: 1rem;
`;

export const CartProductPrice = styled("p")`
  font-size: 1.2rem;
  color: ${color.purple["800"]};
`;

export const CartTotalToPay = styled("div")`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border: 1px solid ${color.slate["50"]};
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding: 2rem;
  background-color: ${color.slate["50"]};
  box-shadow: 0 -1px 30px 1px ${color.purple["6001"]};
`;

export const CartSubtotal = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const CartValue = styled("p")`
  font-weight: 700;
  color: ${color.purple["800"]};
`;

export const ButtonCheckOut = styled("button")`
  margin-top: 1rem;
  padding-block: 1rem;
  width: 100%;
  background-color: ${color.purple["800"]};
  color: ${color.slate["50"]};
  margin-inline: auto;
  text-align: center;
  justify-content: center;
  border-radius: 8px;
`;
