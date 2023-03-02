import { GlobalStyle } from "./styles/global";
import * as S from "./components/Navigation/styles";
import { color } from "./components/UI/colors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

//context
import CartProvider from "./context/CartContext";

//components
import Navigation from "./components/Navigation/Navigation";

//pages
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import ProductsByCategory from "./pages/ProductsByCategory/ProductsByCategory";

// material ui
import IconButton from "@mui/material/IconButton";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function App() {
  const [hiddenBackToTop, setHiddenBackToTop] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        setHiddenBackToTop(false);
      } else {
        setHiddenBackToTop(true);
      }
    });
  }, []);

  const windowBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <CartProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route
              path="/products/category/:category"
              element={<ProductsByCategory />}
            />
          </Routes>
          <S.BackToTop hidden={hiddenBackToTop}>
            <IconButton onClick={windowBackToTop}>
              <ArrowCircleUpIcon
                sx={{
                  fontSize: "2rem",
                  color: `${color.purple["600"]}`,
                }}
              />
            </IconButton>
          </S.BackToTop>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
