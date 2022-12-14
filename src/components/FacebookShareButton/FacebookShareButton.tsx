import { BsFacebook } from 'react-icons/bs';
import * as S from './FacebookShareButton.styled';

interface IProps {
  closeDropdown: () => void;
}

const FacebookShareButton = (props: IProps) => {
  return (
    <S.FacebookShareButton>
      <a
        onClick={props.closeDropdown}
        target='_blank'
        rel='noreferrer'
        href={`http://www.facebook.com/share.php?u=${window.location.href}/${1}`}
        title='Share on Facebook'
      >
        <BsFacebook />
      </a>
    </S.FacebookShareButton>
  );
};

export default FacebookShareButton;
