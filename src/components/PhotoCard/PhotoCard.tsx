import * as S from './PhotoCard.styled';

interface IProps {
  description: string;
  img: string;
}

const PhotoCard = (props: IProps) => {
  return (
    <S.PhotoCard>
      <img src={props.img} alt={props.description} title={props.description} />
      <S.PhotoDescription>{props.description}</S.PhotoDescription>
      <S.PhotoActions>
        <S.PhotoViewButton>View</S.PhotoViewButton>
        <S.PhotoShareButton>Share</S.PhotoShareButton>
      </S.PhotoActions>
    </S.PhotoCard>
  );
};

export default PhotoCard;
