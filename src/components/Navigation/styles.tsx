import styled from "styled-components";
import { color } from "../UI/colors";

export const Navbar = styled("nav")`
  background-color: ${color.slate["50"]};
  color: ${color.purple["800"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: 0 10px 30px -10px ${color.purple["6001"]};
`;

export const Logo = styled("h1")`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const NavbarIcons = styled("div")`
  display: flex;
  gap: 1rem;
`;

export const Menu = styled("div")`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  width: 100%;
  display: ${(props) => (props.hidden ? "none" : "visible")};
  padding: 0.5rem 1rem;
  background-color: ${color.slate["50"]};
  box-shadow: 0 2px 15px -1px ${color.purple["600"]};
`;

export const MenuList = styled("ul")`
  display: flex;
  flex-direction: column;
  padding-block: 2rem;
  & li {
    border-top: 1px solid ${color.slate["300"]};
  }
`;

export const MenuItem = styled("li")`
  padding-block: 0.5rem;
`;

export const BackToTop = styled("div")`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: ${(props) => (props.hidden ? "none" : "visible")};
`;
