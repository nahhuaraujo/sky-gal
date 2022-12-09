import styled from 'styled-components';
import { mainColorLight } from '../../styles/global-styled-css';

export const ScrollToTop = styled.div``;

export const Arrow = styled.div`
  padding-top: 0.5rem;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${mainColorLight};
  position: fixed;
  bottom: 100px;
  right: 75px;
  cursor: pointer;
  transition: 300ms;

  :hover {
    transform: scale(1.3);
  }

  :active {
    transform: scale(1);
  }

  @media (max-width: 850px) {
    opacity: 0;
  }
`;
