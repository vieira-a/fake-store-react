import { GlobalStyle } from "./styles/global";
import ProductCard from "./components/ProductCard/ProductCard";

//components
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Home />
      <ProductCard />
      <Footer />
    </>
  );
}

export default App;
