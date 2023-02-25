import * as S from "./styles";

//components
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Home() {
  return (
    <>
      <S.Hero>
        <h2>Fake Store</h2>
        <p>A fully responsive website that simulates a purchase process</p>
      </S.Hero>
      <ProductCard />
    </>
  );
}
