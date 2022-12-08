import { PhotoCard } from '../../components';
import * as S from './Gallery.styled';

import img1 from '../../assets/gallery/Sky_1.jpg';
import img2 from '../../assets/gallery/Sky_2.JPG';
import img3 from '../../assets/gallery/Sky_3.JPG';

const Gallery = () => {
  return (
    <S.Gallery>
      <PhotoCard
        description='Some description about the place the photo was taken from.'
        imgURL={img1}
        likes={18}
        height={100}
      />
      <PhotoCard
        description='Some description about the place the photo was taken from.'
        imgURL={img2}
        likes={23}
        height={100}
      />
      <PhotoCard
        description='Some description about the place the photo was taken from.'
        imgURL={img3}
        likes={13}
        height={100}
      />
    </S.Gallery>
  );
};

export default Gallery;
