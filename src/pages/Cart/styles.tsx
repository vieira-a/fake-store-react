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
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
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
  border: 1px solid ${color.slate["500"]};
  border-radius: 4px;
  justify-content: center;
  & svg {
    color: ${color.slate["800"]};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CartProductAmount = styled("p")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 1rem;
`;

export const CartProductPrice = styled("p")`
  font-size: 1.2rem;
  color: ${color.purple["800"]};
`;

export const CartTotalToPay = styled("div")`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
