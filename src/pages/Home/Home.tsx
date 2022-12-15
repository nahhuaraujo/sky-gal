import * as S from './Home.styled';
import sky from '../../assets/gallery/Sky_1.jpg';

const Home = () => {
  return (
    <S.Home>
      <S.ImgContainer>
        <p>Welcome to Sky Gal's photo gallery, please enjoy the views from her very own eyes.</p>
        <img src={sky} alt='Sky Gal' />
      </S.ImgContainer>
    </S.Home>
  );
};

export default Home;
