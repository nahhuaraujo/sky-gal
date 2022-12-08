import styled from 'styled-components';
import { defaultPageStyle, defaultFontSizeValue } from '../../styles/global-styled-css';

export const About = styled.main`
  font-size: ${defaultFontSizeValue};
  ${defaultPageStyle};

  span {
    font-style: italic;
  }
`;
