import { GlobalStyle } from "./styles/global";

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
      <Footer />
    </>
  );
}

export default App;
