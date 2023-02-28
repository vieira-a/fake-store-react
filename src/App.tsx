import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//context
import CartProvider from "./context/CartContext";

//components
import Navigation from "./components/Navigation/Navigation";

//pages
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import ProductsByCategory from "./pages/ProductsByCategory/ProductsByCategory";

function App() {
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
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
