import { NavLink } from '../../components';
import * as S from './PhotoCard.styled';

interface IProps {
  id: number;
  description: string;
  img: string;
}

const PhotoCard = (props: IProps) => {
  return (
    <S.PhotoCard>
      <S.PhotoCardImg>
        <img src={props.img} alt={props.description} title={props.description} />
      </S.PhotoCardImg>
      <S.PhotoDescription>{props.description}</S.PhotoDescription>
      <S.PhotoActions>
        <NavLink to={`${props.id}`} type='button'>
          View
        </NavLink>
        <S.PhotoShareButton>Share</S.PhotoShareButton>
      </S.PhotoActions>
    </S.PhotoCard>
  );
};

export default PhotoCard;
