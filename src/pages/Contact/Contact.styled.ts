import styled from 'styled-components';
import { defaultFontSizeValue } from '../../styles/global-styled-css';

export const Contact = styled.section`
  height: 100%;
  font-size: ${defaultFontSizeValue};
  text-align: center;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 1rem;
  }
  ul {
    margin-left: 2rem;
  }
  li {
    list-style: none;
  }
`;
