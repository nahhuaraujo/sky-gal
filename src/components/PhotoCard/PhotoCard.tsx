import { NavLink, ShareButton } from '../../components';
import { IPhoto } from '../../models';
import * as S from './PhotoCard.styled';

interface IProps {
  photo: IPhoto;
}

const PhotoCard = ({ photo }: IProps) => {
  return (
    <S.PhotoCard>
      <S.PhotoCardImg>
        <img src={photo.img} alt={photo.description} title={photo.description} />
      </S.PhotoCardImg>
      <div>
        <S.PhotoTitle>{photo.title}</S.PhotoTitle>
        <S.PhotoLocation>{photo.location}</S.PhotoLocation>
      </div>
      <S.PhotoActions>
        <NavLink to={`${photo.id}`} type='button'>
          View
        </NavLink>
        <ShareButton id={photo.id} />
      </S.PhotoActions>
    </S.PhotoCard>
  );
};

export default PhotoCard;
