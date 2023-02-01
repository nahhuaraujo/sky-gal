import styled from 'styled-components';
import { mainColorLight, defaultHoverShadow } from '../../styles/global-styled-css';

export const ScrollToTop = styled.div``;

interface IArrowProps {
  scrolled: number;
}
export const Arrow = styled.div<IArrowProps>`
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${mainColorLight};
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 8%;
  left: 8%;
  cursor: pointer;
  font-size: 2rem;
  opacity: ${({ scrolled }) => (scrolled > 300 ? 1 : 0)};
  transition: 300ms;

  :hover {
    transform: scale(1.3);
  }

  ${defaultHoverShadow};

  :active {
    transform: scale(1);
  }

  @media (max-width: 620px) {
    left: 45px;
  }
`;
