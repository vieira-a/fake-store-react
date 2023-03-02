import data from "../../mock/data.json";
import * as S from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Badge, { BadgeProps } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useContext, useState, useEffect } from "react";
import { CartContextType } from "../../types/cart";
import { CartContext } from "../../context/CartContext";
import { color } from "../UI/colors";

import { Link } from "react-router-dom";

export default function Navigation() {
  const { newCart } = useContext(CartContext) as CartContextType;
  const [categoryMenu, setCategoryMenu] = useState<String[]>([]);

  const handleCategoryMenu = () => {
    let allCategories: String[] = [];

    data.map((item) => {
      allCategories.push(item.category);
      setCategoryMenu([...new Set(allCategories)]);
    });
  };

  useEffect(() => {
    handleCategoryMenu();
  }, [data]);

  const [hiddenMenu, setHiddenMenu] = useState<boolean>(true);

  const handleMenu = () => {
    if (hiddenMenu === true) {
      setHiddenMenu(false);
    } else {
      setHiddenMenu(true);
    }
  };

  return (
    <S.Navbar id="home">
      <IconButton aria-label="Open Menu" onClick={handleMenu}>
        <MenuIcon />
      </IconButton>
      <S.Menu hidden={hiddenMenu}>
        <IconButton aria-label="Close Menu" onClick={handleMenu}>
          <CloseIcon />
        </IconButton>
        <S.MenuList>
          {categoryMenu.map((item) => (
            <S.MenuItem key={`category${item}`}>
              <IconButton
                aria-label="Menu item"
                onClick={handleMenu}
                sx={{
                  fontSize: ".8rem",
                  textTransform: "uppercase",
                  color: `${color.purple["800"]}`,
                  fontWeight: "bold",
                }}
              >
                <Link to={`/products/category/${item}`}>{item} </Link>
              </IconButton>
            </S.MenuItem>
          ))}
          <S.MenuItem>
            <IconButton
              aria-label="Menu item"
              onClick={handleMenu}
              sx={{
                fontSize: ".8rem",
                textTransform: "uppercase",
                color: `${color.purple["800"]}`,
                fontWeight: "bold",
              }}
            >
              <Link to={"/"}>All products</Link>
            </IconButton>
          </S.MenuItem>
        </S.MenuList>
      </S.Menu>
      <Link to={"/"}>
        <S.Logo>React Fake Store</S.Logo>
      </Link>
      <S.NavbarIcons>
        <Link to={"/cart"}>
          <IconButton aria-label="cart">
            <ShoppingCartIcon />
            <Badge
              badgeContent={newCart.length}
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
