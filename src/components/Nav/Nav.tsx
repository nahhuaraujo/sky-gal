import { NavLink } from '../';
import { PublicRoutes } from '../../routes';
import * as S from './Nav.styled';

const Nav = () => {
  return (
    <S.Nav>
      <NavLink to={`${PublicRoutes.GALLERY}`}>Gallery</NavLink>
      <NavLink to={`${PublicRoutes.ABOUT}`}>About</NavLink>
    </S.Nav>
  );
};

export default Nav;
