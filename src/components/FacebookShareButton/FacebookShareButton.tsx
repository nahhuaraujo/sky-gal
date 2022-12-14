import { BsFacebook } from 'react-icons/bs';
import * as S from './FacebookShareButton.styled';

interface IProps {
  id?: number;
  closeDropdown: () => void;
}

const FacebookShareButton = (props: IProps) => {
  const url = props.id
    ? `http://www.facebook.com/share.php?u=${window.location.href}/${props.id}`
    : `http://www.facebook.com/share.php?u=${window.location.href}`;
  return (
    <S.FacebookShareButton>
      <a onClick={props.closeDropdown} target='_blank' rel='noreferrer' href={url} title='Share on Facebook'>
        <BsFacebook />
      </a>
    </S.FacebookShareButton>
  );
};

export default FacebookShareButton;
