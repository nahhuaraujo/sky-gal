import styled from 'styled-components';
import {
  defaultButtonStyle,
  defaultHoverShadow,
  mainColorMid,
  secondaryFontSizeValue,
} from '../../styles/global-styled-css';

export const PhotoCard = styled.div`
  min-width: min-content;
  height: min-content;
  border-radius: 1rem;
  padding: 1rem;
  background-color: ${mainColorMid};
  transition: 300ms;
  font-size: ${secondaryFontSizeValue};

  ${defaultHoverShadow}
`;

export const PhotoCardImg = styled.div`
  img {
    width: 100%;
  }
`;

export const PhotoActions = styled.div`
  margin-top: 1rem;
  bottom: 0;
  display: flex;
  justify-content: center;

  button {
    margin-left: 1rem;
  }
`;

export const PhotoDetails = styled.section`
  div {
    margin-top: 1rem;
  }
`;

export const PhotoViewButton = styled.button`
  ${defaultButtonStyle};
`;

export const PhotoShareButton = styled.button`
  ${defaultButtonStyle};
`;
