import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../mock/data.json";
import * as S from "./styles";
export default function MenuCategories() {
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

  return (
    <>
      {categoryMenu.map((item) => (
        <li key={`category${item}`}>
          <S.FooterMenuItems>
            <Link to={`/products/category/${item}`}>{item}</Link>
          </S.FooterMenuItems>
        </li>
      ))}
    </>
  );
}
