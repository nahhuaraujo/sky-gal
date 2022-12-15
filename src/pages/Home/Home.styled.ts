import styled from 'styled-components';
import { defaultFontSizeValue, defaultPageStyle } from '../../styles/global-styled-css';

export const Home = styled.main`
  ${defaultPageStyle};
  font-size: ${defaultFontSizeValue};
`;

export const ImgContainer = styled.div`
  position: relative;

  p {
    width: 70%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  img {
    width: 100%;
  }
`;
