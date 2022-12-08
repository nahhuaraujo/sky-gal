import styled from 'styled-components';
import { defaultButtonStyle, mainColorMid } from '../../styles/global-styled-css';

export const PhotoCard = styled.div`
  height: min-content;
  border-radius: 1rem;
  padding: 1rem;
  background-color: ${mainColorMid};

  > img {
    width: 100%;
    transition: 300ms;

    :hover {
      filter: opacity(0.8);
      transform: scale(1.01);
    }
  }
`;

export const PhotoActions = styled.div`
  margin-top: 1rem;
  bottom: 0;
  display: flex;
  justify-content: end;
`;

export const PhotoViewButton = styled.button`
  ${defaultButtonStyle};
`;

export const PhotoShareButton = styled.button`
  ${defaultButtonStyle};
`;
