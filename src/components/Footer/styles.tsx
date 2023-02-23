import styled from "styled-components";
import { color } from "../UI/colors";

export const FooterSection = styled("footer")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-block: 3rem;
  box-shadow: 0 -10px 30px 10px ${color.purple["6001"]};
`;

export const FooterMenu = styled("ul")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Logo = styled("a")`
  font-size: large;
  font-weight: bold;
  color: ${color.purple["800"]};
`;

export const Copyright = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
