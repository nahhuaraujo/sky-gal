import { PhotoCard, ScrollToTop } from '../../components';
import { gallery } from '../../data';
import * as S from './Gallery.styled';

const Gallery = () => {
  return (
    <S.Gallery>
      {gallery.map(photo => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
      <ScrollToTop />
    </S.Gallery>
  );
};

export default Gallery;
