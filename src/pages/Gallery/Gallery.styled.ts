import styled from 'styled-components';
import { defaultPageStyle } from '../../styles/global-styled-css';

export const Gallery = styled.main`
  ${defaultPageStyle};

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;
