import styled from 'styled-components';
import { defaultButtonStyle, defaultPaddingValue, secondaryColorLight } from '../../styles/global-styled-css';

export const ShareButton = styled.div`
  position: relative;
`;

export const Button = styled.button`
  ${defaultButtonStyle}
`;

export const ShareButtonDropdown = styled.div``;

interface IButtonDropbackProps {
  isVisible: boolean;
}
export const ButtonDropback = styled.div<IButtonDropbackProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  transition: 300ms;
  z-index: 10;
`;

interface IShareButtonActionsProps {
  isVisible: boolean;
}
export const ShareButtonActions = styled.div<IShareButtonActionsProps>`
  width: max-content;
  border: 1px solid ${secondaryColorLight};
  border-radius: 1rem;
  padding: ${defaultPaddingValue};
  position: absolute;
  top: 60px;
  right: -50px;
  z-index: 100;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: 300ms;

  button:first-child {
    margin: 0;
  }
  button {
    margin-left: 0.5rem;
    ${defaultButtonStyle}
    font-size: 1rem;
  }
`;
