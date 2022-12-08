import { NavLink } from '../';
import { PublicRoutes } from '../../routes';
import * as S from './Logo.styled';

const Logo = () => {
  return (
    <S.Logo>
      <NavLink to={PublicRoutes.HOME} padding='default'>
        SkyGal
      </NavLink>
    </S.Logo>
  );
};

export default Logo;
