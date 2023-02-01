import styled from 'styled-components';
import {
  defaultButtonStyle,
  defaultHoverShadow,
  mainColorMid,
  photoLocationStyle,
  secondaryFontSizeValue,
} from '../../styles/global-styled-css';

export const PhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 1rem;
  background-color: ${mainColorMid};
  transition: 300ms;
  font-size: ${secondaryFontSizeValue};

  ${defaultHoverShadow};
`;

export const PhotoCardImg = styled.div`
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const PhotoActions = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const PhotoTitle = styled.div`
  margin-top: 1rem;
`;

export const PhotoLocation = styled.div`
  margin-top: 0.5rem;
  ${photoLocationStyle};
`;

export const PhotoViewButton = styled.button`
  ${defaultButtonStyle};
`;

export const PhotoShareButton = styled.button`
  ${defaultButtonStyle};
`;
