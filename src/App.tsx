import { GlobalStyle } from "./styles/global";

//components
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Home />
    </>
  );
}

export default App;
