import * as S from './styles';
import MenuIcon from '@mui/icons-material/Menu';
import Badge, { BadgeProps } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Navigation() {
  return (
    <S.Navbar>
      <IconButton aria-label='Open Menu'>
        <MenuIcon />
      </IconButton>
      <S.Logo>Fake Store</S.Logo>
      <S.NavbarIcons>
        <IconButton aria-label="cart">
          <ShoppingCartIcon/>
          <Badge badgeContent={0} />
        </IconButton>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Anderson Vieira" src="https://avatars.githubusercontent.com/u/65618765?v=4" />
        </Stack>
      </S.NavbarIcons>
    </S.Navbar>
  )
}