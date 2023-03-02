import styled from "styled-components";
import { color } from "../UI/colors";

export const ContainerProducts = styled("section")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3.2rem 1.2rem;
`;

export const CardProduct = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid ${color.slate["300"]};
  border-radius: 8px;
  padding: 1.2rem;
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
`;

export const ProductImage = styled("img")`
  max-width: 50%;
  margin-inline: auto;
`;

export const ProductTitle = styled("h2")`
  font-size: 1.5rem;
  color: black;
  font-weight: 700;
`;

export const ProductDescriptionSection = styled("div")`
  display: flex;
  justify-content: center;
`;

export const ProductDescription = styled("p")`
  color: ${color.slate["500"]};
`;

export const ProductPrice = styled(ProductTitle)`
  color: ${color.purple["800"]};
`;

export const PageUtilSection = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1.2rem;
  gap: 1rem;
`

export const NavIndicator = styled("div")`
  display: flex;
  justify-content: center;
  gap: .5rem;
  font-size: .8rem;
  font-weight: 700;
  color: ${color.purple['800']};
  text-transform: capitalize;
`

export const OrderByFilter = styled("div")`
  & select {
    padding: .3rem .5rem;
    font: inherit;
    font-size: .8rem;
    border: none;
    border: 1px solid ${color.slate['500']};
    border-radius: 4px;
  }
  & option {
    font: inherit !important;
  }
`