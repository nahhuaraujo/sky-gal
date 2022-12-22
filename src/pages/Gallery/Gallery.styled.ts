import styled from 'styled-components';
import { defaultPageStyle } from '../../styles/global-styled-css';

export const Gallery = styled.main`
  ${defaultPageStyle};

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  gap: 1rem;
  justify-content: center;
`;
