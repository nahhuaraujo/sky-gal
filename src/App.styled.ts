import styled from 'styled-components';
import { secondaryColorLight } from './styles/global-styled-css';

export const App = styled.div`
  min-height: 100vh;
  position: relative;
  color: ${secondaryColorLight};

  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
`;

export const Main = styled.div`
  padding: 0 1rem;
`;
