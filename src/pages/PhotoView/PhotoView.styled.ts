import styled from 'styled-components';
import {
  defaultButtonStyle,
  defaultPageStyle,
  mainColorMid,
  secondaryFontSizeValue,
} from '../../styles/global-styled-css';

export const PhotoView = styled.main`
  ${defaultPageStyle}
`;

export const PhotoViewContainer = styled.section`
  width: 90%;
  padding: 1rem;
  margin: 0 auto;
  border-radius: 1rem;
  background-color: ${mainColorMid};
  transition: 300ms;
  font-size: ${secondaryFontSizeValue};

  :hover {
    box-shadow: inset 0 -3rem 3rem rgba(0, 0, 0, 0.1), 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.3);
  }
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

export const PhotoViewDescription = styled.section`
  margin-top: 1rem;
`;

export const PhotoBackButton = styled.button`
  ${defaultButtonStyle};
`;

export const PhotoShareButton = styled.button`
  ${defaultButtonStyle};
`;
