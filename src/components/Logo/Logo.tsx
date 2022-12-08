import { NavLink } from '../';
import * as S from './Logo.styled';

const Logo = () => {
  return (
    <S.Logo>
      <NavLink to='/' padding='default'>
        SkyGal
      </NavLink>
    </S.Logo>
  );
};

export default Logo;
