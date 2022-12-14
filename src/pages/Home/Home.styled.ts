import styled from 'styled-components';
import { defaultPageStyle, defaultFontSizeValue } from '../../styles/global-styled-css';

export const Home = styled.main`
  min-height: 100vh;
  height: 100%;
  font-size: ${defaultFontSizeValue};
  ${defaultPageStyle};

  span {
    font-style: italic;
  }
`;

export const Img = styled.img`
  height: 90vh;
  float: left;
  shape-outside: polygon(
    289px 86px,
    297px 168px,
    346px 252px,
    376px 365px,
    436px 467px,
    451px 531px,
    534px 632px,
    7px 633px,
    7px 493px,
    8px 375px,
    14px 259px,
    50px 183px,
    97px 154px,
    83px 97px,
    92px 40px,
    132px 0px,
    200px -1px,
    254px 15px
  );
`;
