import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { defaultLinkButtonStyle, defaultLinkTextStyle, defaultPaddingValue } from '../../styles/global-styled-css';

interface INavLinkProps {
  padding?: 'none' | 'default';
  type?: 'text' | 'button';
}

export const NavLink = styled(Link)<INavLinkProps>`
  text-decoration: none;
  padding: ${({ padding = 'default' }) => (padding === 'default' ? `${defaultPaddingValue}` : '0')};
  display: flex;
  align-items: center;
  ${({ type = 'button' }) => (type === 'button' ? defaultLinkButtonStyle : defaultLinkTextStyle)}
`;
