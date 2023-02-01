import styled from 'styled-components';
import { defaultFontSizeValue } from '../../styles/global-styled-css';

export const Home = styled.section`
  min-width: min-content;
  font-size: ${defaultFontSizeValue};
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
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
    object-fit: cover;
  }
`;
