import * as S from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Badge, { BadgeProps } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import { Link } from "react-router-dom";

export default function Navigation() {
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
            <Badge badgeContent={0} />
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
