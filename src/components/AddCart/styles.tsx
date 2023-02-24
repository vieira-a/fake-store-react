import styled from "styled-components";
import { color } from "../UI/colors";

export const ButtonAddToCart = styled("button")`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-block: 0.6rem;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: ${color.purple["600"]};
  color: ${color.slate["50"]};
  margin-inline: auto;
  border-radius: 8px;
  box-shadow: 0 2px 3px hsla(0, 0%, 0%, 0.2);
  :hover {
    background-color: ${color.purple["800"]};
    transition: 0.25s ease;
  }
`;
