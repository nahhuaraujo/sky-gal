import * as S from './About.styled';
import femFigure from '../../assets/gallery/fem-figure.png';

const About = () => {
  return (
    <S.About>
      <S.ImgContainer>
        <S.Img src={femFigure} />
        <S.GradiantOverlay />
      </S.ImgContainer>
      <p>
        Carolina is a fan of the sky, be it night, day or evening, she can hardly resist the temptation to take the cell
        phone out of her pocket to capture the great dome no matter what state it is in, be it cloudy, sunny or stormy.
      </p>
      <p>
        That's why we call her the sky gal <span>(sky girl)</span>.
      </p>
    </S.About>
  );
};

export default About;
