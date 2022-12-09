import { PhotoCard } from '../../components';
import { gallery } from '../../data';
import * as S from './Gallery.styled';
import { ScrollToTop } from '../../components';

const Gallery = () => {
  return (
    <S.Gallery>
      {gallery.map(picture => (
        <PhotoCard key={picture.id} id={picture.id} description={picture.description} img={picture.img} />
      ))}
      <ScrollToTop />
    </S.Gallery>
  );
};

export default Gallery;
