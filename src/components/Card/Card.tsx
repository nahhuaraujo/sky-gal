import * as S from './Card.styled';

interface IProps {
  children: React.ReactNode;
}

const Card = (props: IProps) => {
  return <S.Card>{props.children}</S.Card>;
};

export default Card;
