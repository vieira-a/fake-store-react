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

export const CartLogo = styled("a")`
  font-size: 1.8rem;
  font-weight: 600;
`;

export const CartSection = styled("section")`
  padding: 0.5rem 1rem;
`;

export const CartTitle = styled("h4")`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${color.purple["800"]};
`;

export const CartMessage = styled("p")`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${color.purple["600"]};
  text-align: center;
  margin-block: 1rem;
`;
