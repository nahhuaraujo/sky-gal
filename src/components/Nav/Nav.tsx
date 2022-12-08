import { NavLink } from '../';
import * as S from './Nav.styled';

const Nav = () => {
  return (
    <S.Nav>
      <NavLink to='gallery'>Gallery</NavLink>
      <NavLink to='about'>About</NavLink>
    </S.Nav>
  );
};

export default Nav;
