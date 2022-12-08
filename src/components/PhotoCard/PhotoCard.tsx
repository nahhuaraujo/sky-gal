import * as S from './PhotoCard.styled';

interface IProps {
  description: string;
  imgURL: string;
  likes: number;
  height: number;
}

const PhotoCard = (props: IProps) => {
  return (
    <S.PhotoCard height={props.height}>
      <div>
        <img src={props.imgURL} alt={props.description} title={props.description} />
      </div>
      <S.PhotoDescription>{props.description}</S.PhotoDescription>
      <S.PhotoActions>
        <S.PhotoLikeButton>
          {'Likes '}
          {props.likes}
        </S.PhotoLikeButton>
        <S.PhotoShareButton>Share</S.PhotoShareButton>
      </S.PhotoActions>
    </S.PhotoCard>
  );
};

export default PhotoCard;
