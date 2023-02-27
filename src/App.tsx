import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//context
import CartProvider from "./context/CartContext";

//components
import Navigation from "./components/Navigation/Navigation";

//pages
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

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
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
