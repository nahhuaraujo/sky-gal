import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  defaultButtonStyle,
  defaultLinkButtonStyle,
  defaultLinkTextStyle,
  defaultPaddingValue,
} from '../../styles/global-styled-css';

interface INavLinkProps {
  padding?: 'none' | 'default';
  type?: 'text' | 'button' | 'link';
}

export const NavLink = styled(Link)<INavLinkProps>`
  text-decoration: none;
  padding: ${({ padding = 'default' }) => (padding === 'default' ? `${defaultPaddingValue}` : '0')};
  display: flex;
  align-items: center;
  ${({ type = 'link' }) =>
    type === 'link' ? defaultLinkButtonStyle : type === 'text' ? defaultLinkTextStyle : defaultButtonStyle};
`;
