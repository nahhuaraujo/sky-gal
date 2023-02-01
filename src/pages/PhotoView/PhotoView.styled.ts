import styled from 'styled-components';
import {
  defaultButtonStyle,
  defaultHoverShadow,
  mainColorMid,
  photoLocationStyle,
  secondaryFontSizeValue,
} from '../../styles/global-styled-css';

export const PhotoView = styled.section``;

export const PhotoViewContainer = styled.section`
  width: 90%;
  padding: 1rem;
  margin: 0 auto;
  border-radius: 5px;
  background-color: ${mainColorMid};
  transition: 300ms;
  font-size: ${secondaryFontSizeValue};

  ${defaultHoverShadow}
`;

export const PhotoViewImg = styled.div`
  img {
    width: 100%;
  }
`;

export const PhotoViewActions = styled.div`
  margin-top: 1rem;
  bottom: 0;
  display: flex;
  justify-content: end;

  button {
    margin-left: 1rem;
  }
`;

export const PhotoTitle = styled.div`
  margin-top: 1rem;
`;

export const PhotoLocation = styled.div`
  margin-top: 0.5rem;
  ${photoLocationStyle};
`;

export const PhotoBackButton = styled.button`
  ${defaultButtonStyle};
`;

export const PhotoShareButton = styled.button`
  ${defaultButtonStyle};
`;
