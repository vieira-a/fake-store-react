import styled from 'styled-components';
import { color } from '../UI/colors'

export const Navbar = styled('nav')`
  background-color: ${color.slate['50']};
  color: ${color.purple['800']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 1rem;
  box-shadow: 0 10px 30px -10px ${color.purple['6001']};
`

export const Logo = styled('a')`
  font-size: xx-large;
  font-weight: bold;
`

export const NavbarIcons = styled('div')`
  display: flex;
  gap: 1rem;
`