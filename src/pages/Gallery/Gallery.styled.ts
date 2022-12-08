import styled from 'styled-components';
import { defaultPageStyle } from '../../styles/global-styled-css';

export const Gallery = styled.main`
  ${defaultPageStyle};

  display: grid;
  grid-template-columns: repeat(1, 60%);
  gap: 1rem;
  justify-content: center;
`;
