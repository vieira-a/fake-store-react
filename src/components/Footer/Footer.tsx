import { useEffect, useState } from 'react';
import data from '../../mock/data.json';
import * as S from './styles'
export default function Footer() {

  const [categoryMenu, setCategoryMenu] = useState<String[]>([])

  const handleCategoryMenu = () => {
    let allCategories: String[] = []
    
    data.map((item) => {
      allCategories.push(item.category)
      setCategoryMenu([... new Set(allCategories)])
    })
    console.log(categoryMenu)
  }

  useEffect(()=> {
    handleCategoryMenu()
  }, [data])

  return (
    <S.FooterSection>
      
      <S.FooterMenu>
      {categoryMenu.map(item => (
        <li key={`category${item}`}>
        <S.FooterMenuItems href='#'>
          {item}
        </S.FooterMenuItems>
        </li>
      ))}

      </S.FooterMenu>
      <S.Copyright>
        <S.Logo href='#'>Fake Store</S.Logo>
        <p>&copy; 2023. All rights reserved.</p>
      </S.Copyright>
    </S.FooterSection>
  )
}