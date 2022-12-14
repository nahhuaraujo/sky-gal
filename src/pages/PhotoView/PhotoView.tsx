import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink, ShareButton } from '../../components';
import { gallery } from '../../data';
import { PublicRoutes } from '../../routes';
import * as S from './PhotoView.styled';

interface Photo {
  id: number;
  description: string;
  img: string;
}

const PhotoView = () => {
  const [photo, setPhoto] = useState<Photo>();
  const { id } = useParams();

  useEffect(() => {
    const selectedPhoto = gallery.find(photo => photo.id === Number.parseInt(id as string));
    if (selectedPhoto) return setPhoto(selectedPhoto as any);
  }, [id]);

  return (
    <S.PhotoView>
      <S.PhotoViewContainer>
        <S.PhotoViewImg>
          <img src={photo?.img} alt={photo?.description} title={photo?.description} />
        </S.PhotoViewImg>
        <S.PhotoViewDescription>{photo?.description}</S.PhotoViewDescription>
        <S.PhotoViewActions>
          <NavLink to={PublicRoutes.GALLERY} type='button'>
            Back
          </NavLink>
          <ShareButton />
        </S.PhotoViewActions>
      </S.PhotoViewContainer>
    </S.PhotoView>
  );
};

export default PhotoView;
