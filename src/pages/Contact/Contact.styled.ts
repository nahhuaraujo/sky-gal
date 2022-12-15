import styled from 'styled-components';
import { defaultFontSizeValue, defaultPageStyle } from '../../styles/global-styled-css';

export const Contact = styled.div`
  ${defaultPageStyle}
  font-size: ${defaultFontSizeValue};
  text-align: center;

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
