import styled from 'styled-components';
import { defaultPageStyle } from '../../styles/global-styled-css';

export const Gallery = styled.main`
  ${defaultPageStyle};

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  @media (width < 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (width < 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
