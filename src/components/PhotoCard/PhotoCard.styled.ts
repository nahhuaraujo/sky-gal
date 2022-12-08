import styled from 'styled-components';
import { defaultButtonStyle, mainColorMid } from '../../styles/global-styled-css';

export const PhotoCard = styled.div`
  height: min-content;
  border-radius: 1rem;
  padding: 1rem;
  background-color: ${mainColorMid};
  transition: 300ms;

  > img {
    width: 100%;
  }

  :hover {
    box-shadow: inset 0 -3rem 3rem rgba(0, 0, 0, 0.1), 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.3);
  }
`;

export const PhotoActions = styled.div`
  margin-top: 1rem;
  bottom: 0;
  display: flex;
  justify-content: end;

  button {
    margin-left: 1rem;
  }
`;

export const PhotoDescription = styled.section`
  margin-top: 1rem;
`;

export const PhotoViewButton = styled.button`
  ${defaultButtonStyle};
`;

export const PhotoShareButton = styled.button`
  ${defaultButtonStyle};
`;
