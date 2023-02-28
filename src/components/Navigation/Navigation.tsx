import * as S from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Badge, { BadgeProps } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { CartContextType } from "../../types/cart";
import { CartContext } from "../../context/CartContext";
import { color } from "../UI/colors";

import { Link } from "react-router-dom";

export default function Navigation() {
  const { cart } = useContext(CartContext) as CartContextType;

  return (
    <S.Navbar>
      <IconButton aria-label="Open Menu">
        <MenuIcon />
      </IconButton>
      <Link to={"/"}>
        <S.Logo>Fake Store</S.Logo>
      </Link>
      <S.NavbarIcons>
        <Link to={"/cart"}>
          <IconButton aria-label="cart">
            <ShoppingCartIcon />
            <Badge
              badgeContent={cart.length}
              sx={{
                color: `${color.purple["800"]}`,
              }}
            />
          </IconButton>
        </Link>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Anderson Vieira"
            src="https://avatars.githubusercontent.com/u/65618765?v=4"
          />
        </Stack>
      </S.NavbarIcons>
    </S.Navbar>
  );
}
