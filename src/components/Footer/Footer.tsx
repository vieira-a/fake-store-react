import MenuCategories from "../MenuCategories/MenuCategories";
import * as S from "./styles";
export default function Footer() {
  return (
    <S.FooterSection>
      <S.FooterMenu>
        <MenuCategories />
      </S.FooterMenu>
      <S.Copyright>
        <S.Logo href="#">Fake Store</S.Logo>
        <p>&copy; 2023. All rights reserved.</p>
      </S.Copyright>
    </S.FooterSection>
  );
}
