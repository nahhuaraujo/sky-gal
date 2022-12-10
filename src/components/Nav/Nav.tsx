import { NavLink } from '../';
import { PublicRoutes } from '../../routes';
import * as S from './Nav.styled';

const Nav = () => {
  return (
    <S.Nav>
      <NavLink to={PublicRoutes.GALLERY} type='link'>
        Gallery
      </NavLink>
      <NavLink to={PublicRoutes.ABOUT} type='link'>
        About
      </NavLink>
      <NavLink to={PublicRoutes.CONTACT} type='link'>
        Contact
      </NavLink>
    </S.Nav>
  );
};

export default Nav;
