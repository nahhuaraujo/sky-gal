import styled from 'styled-components';
import { defaultButtonStyle, mainColorMid, secondaryColorMid } from '../../styles/global-styled-css';

interface IPhotoCardProps {
  height: number;
}
export const PhotoCard = styled.div<IPhotoCardProps>`
  max-width: ${props => `${props.height}vh`};
  /* border: 1px solid ${secondaryColorMid}; */
  border-radius: 1rem;
  padding: 1rem;
  margin: 0 auto 1rem;
  background-color: ${mainColorMid};

  img {
    max-width: 100%;
  }
`;

export const PhotoActions = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: end;
`;

export const PhotoLikeButton = styled.button`
  ${defaultButtonStyle};
`;

export const PhotoShareButton = styled.button`
  ${defaultButtonStyle};
`;

export const PhotoDescription = styled.section`
  margin-top: 1rem;
`;
