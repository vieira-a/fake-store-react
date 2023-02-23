import styled from "styled-components";
import { color } from "../UI/colors";

export const ContainerProducts = styled("section")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-inline: 1.2rem;
`;

export const CardProduct = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid ${color.slate["300"]};
  border-radius: 8px;
  padding: 2rem;
  background-color: white;
`;

export const ProductCategory = styled("p")`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${color.purple["800"]};
`;

export const ProductImageSection = styled("div")`
  padding-block: 1rem;
  text-align: center;
`;

export const ProductImage = styled("img")`
  max-width: 50%;
  margin: auto;
  @media (min-width: 1024px) {
    max-height: 100px;
  }
`;

export const ProductTitle = styled("h2")`
  font-size: 1.5rem;
  color: black;
  font-weight: 700;
`;

export const ProductDescription = styled("p")`
  color: ${color.slate["500"]};
`;

export const ProductPrice = styled(ProductTitle)`
  color: ${color.purple["800"]};
`;
