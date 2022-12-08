import { PhotoCard } from '../../components';
import { gallery } from '../../data';
import * as S from './Gallery.styled';

const Gallery = () => {
  return (
    <S.Gallery>
      {gallery.map(picture => (
        <PhotoCard key={picture.id} description={picture.description} img={picture.img} />
      ))}
    </S.Gallery>
  );
};

export default Gallery;
